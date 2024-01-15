interface IPorps {
    order: number;
    title: string;
    author: string;
    postedAt: string;
}

export default function PrintPostTitle({
    order,
    title,
    author,
    postedAt,
}: IPorps) {}
