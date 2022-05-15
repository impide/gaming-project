export const TopGamesLists: GamesPath[] = [
    {
        gameTitle: 'Far Cry 5',
        pathImages: '../../../assets/images/main-space/Game-1.svg'
    },
    {
        gameTitle: 'Ghost Recon Wildland',
        pathImages: '../../../assets/images/main-space/Game-2.svg'
    },
    {
        gameTitle: 'Elden Ring',
        pathImages: '../../../assets/images/main-space/Game-3.svg'
    }]

export interface GamesPath {
    gameTitle: string;
    pathImages: string;
}