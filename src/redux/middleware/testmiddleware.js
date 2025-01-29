function testmiddleware () {
    return (next) => {
        return (action) => {
            // console.log("MiddleWare",action,);
            next(action)
        }
    }
}

export default testmiddleware