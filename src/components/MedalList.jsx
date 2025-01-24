export function MedalList({medals, onDelete}) {
    if (medals.length === 0) {
        return null; // medals 배열이 비어있으면 아무것도 렌더링 안됨.
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>국가명</th>
                    <th>금메달</th>
                    <th>은메달</th>
                    <th>동메달</th>
                    <th>액션</th>
                </tr>
            </thead>
            <tbody>
                {medals.map((item) => (
                    <tr key={item.country}>
                        <td>{item.country}</td>
                        <td>{item.gold}</td>
                        <td>{item.silver}</td>
                        <td>{item.bronze}</td>
                        <td>
                            <button onClick={() => onDelete(item.country)}>삭제</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}