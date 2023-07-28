
export const dummyData:ApiResponse[] = [
    {
        date: "2021-01-01 17:15:19",
        mail: "test@mail.com",
        inquiry: "初めまして、こんにちは。私の名前は名前です。"
    },
    {
        date: "2021-01-02 17:15:19",
        mail: "tess@mail.com",
        inquiry: "質問します。"
    },
    {
        date: "2021-01-03 17:15:19",
        mail: "ee@mail.com",
        inquiry: "お世話になっております。"
    }
]

interface ApiResponse {
    date: string;
    mail: string;
    inquiry: string;
}