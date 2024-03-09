export interface TreeNode {
  label: string | number;
  children: TreeNode[];
}

export interface SidebarProps {
  data: TreeNode[];
}

export const enum SidebarMode {
  Vertical = 'Vertical',
  Horizontal = 'Horizontal',
}
