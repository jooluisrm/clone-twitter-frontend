import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

export const TrendingArea = () => {
    return (
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">O que está acontecendo?</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <TrendingItem count={1930} label="#Teste"/>
                <TrendingItem count={1930} label="#Teste"/>
                <TrendingItemSkeleton />
                <TrendingItemSkeleton />
            </div>
        </div>
    );
}