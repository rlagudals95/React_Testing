import { TreeNode } from '../model';

export const SIDE_BAR_WIDTH = 230;

export interface SidebarProps {
  data: TreeNode[];
  depth?: number;
  hasChild?: boolean;
}
