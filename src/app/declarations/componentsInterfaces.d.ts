export interface SidebarProps {
  s: boolean;
  d: Dispatch<SetStateAction<boolean>>;
}
export interface InpProps {
  title: string;
  group: string;
  iniValue?: "kg" | "l";
  id?: string;
  name?: string;
  large?: boolean;
}
