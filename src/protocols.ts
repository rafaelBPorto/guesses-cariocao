import { guesses } from "@prisma/client";

type guessInput = Omit <guesses, "id" | "createAt">

export{
    guessInput
}