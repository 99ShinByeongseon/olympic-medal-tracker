export function MedalForm() {
    return (
        <>
        <h1>2024 파리 올림픽</h1>
        <form>
            <label>
                국가명
                <input type='text' />
            </label>
            <label>
                금메달
                <input type='text' />
            </label>
            <label>
                은메달
                <input type='text' />
            </label>
            <label>
                동메달
                <input type='text' />
            </label>
            <button type='submit'>국가 추가</button>
            <button type='button'>업데이트</button>
        </form>
        </>
    );
}