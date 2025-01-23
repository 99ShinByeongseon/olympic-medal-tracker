import { MedalInput } from "./Medalinput";

export function MedalForm() {
const contentArr = ['국가명', '금메달', '은메달', '동메달'];

    return (
        <>
        <h1>2024 파리 올림픽</h1>
        <form>
            {contentArr.map((text) => (
                <MedalInput key={text} content={text} />
            ))}

            <button type='submit'>국가 추가</button>
            <button type='button'>업데이트</button>
        </form>
        </>
    );
}