
function Food(props) {

    // const daftarMakanan = "pisCok";
    // const daftarMakanan2 = "pisang bakar";

    const daftarMinuman = "kopi";
    const daftarMinuman2 = "teh manis";


    return (
        <food>
            <h2>Ini adalah daftar {props.daftarApa ? "makanan" : "minuman"}</h2>
            <ul>
                <li>{props.daftarMinuman}</li>
                <li>{daftarMinuman}</li>
                <li>{daftarMinuman2.toUpperCase()}</li>
            </ul>
        </food>
    );
}

export default Food