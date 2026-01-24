const Navbar = (props) => {

    function changeTheme(){
        // console.log('theme change');
        props.setTheme('dark');
    }

  return (
    <div>
        {/* <button onClick={()=>{
            props.setTheme('dark')
        }}>Change Theme</button> */}
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar