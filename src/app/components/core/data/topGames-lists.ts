export const TopGamesLists: GamesPath[] = [
    {
        gameTitle: 'Far Cry 5',
        pathImages: '../../../assets/images/main-space/Game-1.svg',
        routerLink: '/main-games'
    },
    {
        gameTitle: 'Ghost Recon Wildland',
        pathImages: '../../../assets/images/main-space/Game-2.svg',
        routerLink: '/main-games'
    },
    {
        gameTitle: 'Elden Ring',
        pathImages: '../../../assets/images/main-space/Game-3.svg',
        routerLink: '/main-games'
    }]

export interface GamesPath {
    gameTitle: string;
    pathImages: string;
    routerLink: string;
}