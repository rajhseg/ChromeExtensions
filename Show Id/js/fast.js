const clear = (()=>{

    const showId = () => {
        const clsname = "high";

        var prevnode = null;

        document.addEventListener('mousemove', function (e) {

            let source = e.srcElement;

            if (prevnode != null)
                (prevnode).classList.remove(clsname);

            (source).classList.add(clsname);

            prevnode = source;
            //console.log(source);

        }, false);

        document.addEventListener('click', function (e) {

            if (window.event.ctrlKey) {
                console.log("ctrl clicked");                
                console.log(e.srcElement)
                //console.log(e.srcElement.outerHTML);
                console.log("ctrl ended");
            }

        }, false);
    }

    showId();
    
})();
