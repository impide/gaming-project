export const MainSidebarIcons: IconSidebar[] = [{
    pathImage: '../../../../assets/images/sidebar/House.svg',
    iconTitle: 'Home'
},
{
    pathImage: '../../../../assets/images/sidebar/Compass.svg',
    iconTitle: 'Discover'
},
{
    pathImage: '../../../../assets/images/sidebar/CalendarMonth.svg',
    iconTitle: 'Calendar'
},
{
    pathImage: '../../../../assets/images/sidebar/Star.svg',
    iconTitle: 'Favoris'
},]

export const OtherSidebarIcons: IconSidebar[] = [{
    pathImage: '../../../../assets/images/sidebar/Heart.svg',
    iconTitle: 'Like'
},
{
    pathImage: '../../../../assets/images/sidebar/Gear.svg',
    iconTitle: 'Setting'
}]

export interface IconSidebar {
    pathImage: string;
    iconTitle: string;
}