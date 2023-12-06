export const corporateFees: FeeData = {
    title: "法人のお客様",
    items: [
        {
            name: "顧問契約",
            details: [
                "月額 30,000円～",
                "決算料金 顧問料の6ヶ月分",
                "年末調整 顧問料の1ヶ月分"
            ]
        },
        {
            name: "決算申告のみ",
            details: [
                "決算料 200,000円～",
                "年末調整 30,000円～"
            ]
        }
    ],
    note: "料金は、目安なので企業規模や業務量により増減することがあります。\n 事前に面談の上、お見積もりさせて頂きます。",
};




type FeeItem = {
    name: string;
    details: string[];
};

export const individualFees: FeeData = {
    title: "個人のお客様",
    items: [
        {
            name: "顧問契約",
            details: [
                "顧問契約月額 10,000円～",
            ],
        },
        {
            name: "確定申告のみ",
            details: [
                "確定申告 80,000円～",
                ],
        }
    ],
    note: "料金は、目安なので企業規模や業務量により増減することがあります。\n 事前に面談の上、お見積もりさせて頂きます。",
}

export const inheritFees: FeeData = {
    title: "相続関連",
    items: [
        {
            name: "",
            details: [
                "相続税申告 300,000円～",
            ],
        }
    ],
    note: "料金は、目安なので企業規模や業務量により増減することがあります。\n 事前に面談の上、お見積もりさせて頂きます。",
}

type FeeData = {
    title: string;
    items: FeeItem[];
    note: string;
};
