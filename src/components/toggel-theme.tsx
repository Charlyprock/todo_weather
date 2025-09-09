import { useId, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"

export default function ToggleTheme() {
  const id = useId()
  const { setTheme, theme } = useTheme()
  const [checked, setChecked] = useState(() => theme == 'dark' ? false : true)

  const toggleSwitch = () => {
    toggleTheme(!checked)
    setChecked((prev) => !prev)
  }
  const toggleTheme = (flag: boolean): void => flag ? setTheme('light') : setTheme('dark')

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => {
          setChecked(false)
          toggleTheme(false)
        }}
      >
        <MoonIcon size={16} aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => {
          setChecked(true)
          toggleTheme(true)
        }}
      >
        <SunIcon size={16} aria-hidden="true" />
      </span>
    </div>
  )
}
