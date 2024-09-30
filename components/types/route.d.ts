export type RootStackParamList = {
    HomeNavigation: undefined;
    Home: undefined;
    Detail: { id: number, title: string, stars: number };
    About: undefined;
}

// declare global{
//     namespace ReactNavigation {
//         interface RootParamList extends RootStackParamList
//     }
// }

declare module "*.png";