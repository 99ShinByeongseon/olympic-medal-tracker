export function EmptyText({ isEmpty }) {
    return (
        <>
        {isEmpty && <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>}
        </>
    );
}