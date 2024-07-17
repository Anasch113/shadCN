import { Button } from "./button";
import { Input } from "./input";
import { Search } from "lucide-react"

type Props = {
    placeholder?: string
}


export function SearchInput({ placeholder }: Props) {
    return (

        <div className="flex gap-1 items-center">
            <Input placeholder={placeholder} type="text" className="outline-none" />
            <Button >
                <Search  />
            </Button>
        </div>


    )


}