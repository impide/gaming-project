export const TopFeedbackList: FeedBacks[] = [
    {
        avatar: 'https://images.unsplash.com/photo-1508285296015-c0b524447532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80',
        pseudo: 'Kitty Gameuse',
        rating: 4,
        gameTitle: 'Far Cry 6',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,lectus magna fringilla urna, porttitor'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1530602055568-20643ad3132b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        pseudo: 'Taylor',
        rating: 5,
        gameTitle: 'Elden Ring',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,lectus magna fringilla urna, porttitor'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1568909218940-9ca084ad57de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        pseudo: 'Alyne.R',
        rating: 4,
        gameTitle: 'Devil May Cry 5',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,lectus magna fringilla urna, porttitor'
    }]

export interface FeedBacks {
    avatar: string;
    pseudo: string;
    rating: number;
    gameTitle: string;
    feedback: string;
}