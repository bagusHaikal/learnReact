
function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return <h2>Selamat datang kembali, {props.username}!</h2>;
    // } else {
    //     return <h2>Silakan masuk ke akun Anda.</h2>;
    // }
    return (
        props.isLoggedIn ? 
        <h2 className="masuk">selamat datang kembali, {props.username}!</h2> 
        : 
        <h2 className="belumMasuk">silahkan masuk ke akun anda!</h2>
    );
}

export default UserGreeting;