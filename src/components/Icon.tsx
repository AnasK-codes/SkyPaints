import React from "react";
import * as LucideIcons from "lucide-react";

const iconMap: Record<string, any> = {
  auto_awesome: LucideIcons.Sparkles,
  visibility: LucideIcons.Eye,
  format_paint: LucideIcons.PaintRoller,
  shield: LucideIcons.Shield,
  water_drop: LucideIcons.Droplet,
  cleaning_services: LucideIcons.SprayCan,
  palette: LucideIcons.Palette,
  shopping_cart: LucideIcons.ShoppingCart,
  remove: LucideIcons.Minus,
  add: LucideIcons.Plus,
  delete: LucideIcons.Trash2,
  chat: LucideIcons.MessageCircle,
  call: LucideIcons.Phone,
  mail: LucideIcons.Mail,
  location_on: LucideIcons.MapPin,
  schedule: LucideIcons.Clock,
  star: LucideIcons.Star,
  star_half: LucideIcons.StarHalf,
  expand_more: LucideIcons.ChevronDown,
  check_circle: LucideIcons.CheckCircle2,
  send: LucideIcons.Send,
  close: LucideIcons.X,
  arrow_back: LucideIcons.ArrowLeft,
  arrow_forward: LucideIcons.ArrowRight,
  health_and_safety: LucideIcons.ShieldCheck,
  opacity: LucideIcons.Droplets,
  brush: LucideIcons.Brush,
  layers: LucideIcons.Layers,
  invert_colors: LucideIcons.Droplet,
  calculate: LucideIcons.Calculator,
  home_pin: LucideIcons.Home,
  forum: LucideIcons.MessageSquare,
  swap_horiz: LucideIcons.ArrowRightLeft,
  check: LucideIcons.Check,
  receipt_long: LucideIcons.Receipt,
  grid_view: LucideIcons.Grid,
  east: LucideIcons.ArrowRight,
  air: LucideIcons.Wind,
  wb_sunny: LucideIcons.Sun,
  psychiatry: LucideIcons.HeartPulse,
  search: LucideIcons.Search,
  colorize: LucideIcons.Pipette,
  landscape: LucideIcons.Mountain,
  eco: LucideIcons.Leaf,
  self_improvement: LucideIcons.Sparkles,
  local_fire_department: LucideIcons.Flame,
  terrain: LucideIcons.MountainSnow,
  texture: LucideIcons.PaintBucket,

  explore: LucideIcons.Compass,
  menu: LucideIcons.Menu,
  chevron_right: LucideIcons.ChevronRight,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "", ...props }: IconProps) {
  const LucideIcon = iconMap[name] || LucideIcons.HelpCircle;
  return (
    <LucideIcon className={className} width="1em" height="1em" {...props} />
  );
}
