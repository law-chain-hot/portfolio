class MaskGuide {
    constructor() {
        // 1. init
        this.initValues()
        this.initNode()
        this.setMaskBtnNode() // add even to button

        // 2. guides
        this.guides = null

        // 3. start
        // call start()

    }

    initValues() {
        this.offsetWidth = null
        this.offsetHeight = null
        this.getBoundingLeft = null
        this.getBoundingTop = null
        this.getBoundingRight = null
        this.getBoundingBottom = null
        this.screenWidth = null
        this.screenHeight = null

        this.count = 0;
    }

    initNode() {
        // mask
        this.docNode = document.querySelector('body')
        this.maskNode = document.createElement('div');
        this.maskNode.className = 'mask';
        this.docNode.insertAdjacentElement("beforeend", this.maskNode);

        // mask-tip
        this.maskTipNode = document.createElement('div');
        this.maskTipNode.className = 'mask-tip';
        this.maskNode.insertAdjacentElement("afterbegin", this.maskTipNode)

        // mask-des
        this.maskDesNode = document.createElement('div');
        this.maskDesNode.className = 'mask-des';
        this.maskTipNode.insertAdjacentElement("afterbegin", this.maskDesNode)

        // mask-button
        this.maskBtnNode = document.createElement('button');
        this.maskBtnNode.className = 'mask-btn';
        this.maskTipNode.insertAdjacentElement("beforeend", this.maskBtnNode)
    }


    setMask(el) {
        // 1. get the value of element
        console.log(el)
        this.offsetWidth = el.offsetWidth;
        this.offsetHeight = el.offsetHeight;
        this.getBoundingLeft = el.getBoundingClientRect().left;
        this.getBoundingTop = el.getBoundingClientRect().top;
        this.getBoundingRight = el.getBoundingClientRect().right;
        this.getBoundingBottom = el.getBoundingClientRect().bottom;
        console.log("console.log(this.offsetWidth, this.offsetHeight)");
        console.log(this.offsetWidth, this.offsetHeight)
        console.log(this.getBoundingLeft, this.getBoundingLeft);
        
    
        // 2. get the value of screen
        this.screenWidth = this.docNode.scrollWidth;
        this.screenHeight = this.docNode.scrollHeight;
        console.log("console.log(this.screenWidth, this.screenHeight)");
        
        console.log(this.screenWidth, this.screenHeight)
    
        // 3.1 set mask
        this.maskNode.style.boxSizing = "border-box";
        this.maskNode.style.zIndex = "900";
    
    
        // 3.2 screen
        this.maskNode.style.width = this.screenWidth + "px";
        this.maskNode.style.height = this.screenHeight + "px";
    
        // 3.3 border
        console.log(this.getBoundingLeft)
        this.maskNode.style.borderLeft = this.getBoundingLeft - 10 + "px";
        this.maskNode.style.borderTop = this.getBoundingTop - 10 + "px";
        this.maskNode.style.borderRight = this.screenWidth - this.offsetWidth - this.getBoundingLeft - 10 + "px";
        this.maskNode.style.borderBottom = this.screenHeight - this.offsetHeight - this.getBoundingTop - 10 + "px";
    
        this.maskNode.style.borderColor = "rgba(0, 0, 0, 0.5)";
        this.maskNode.style.borderStyle = 'solid';
        this.maskNode.style.backgroundColor = "rgba(225, 225, 225, 0.1)";
    
        this.maskNode.style.position = "absolute";
        this.maskNode.style.left = 0;
        this.maskNode.style.top = 0;
    
        // 3.4 animation
        this.maskNode.style.transition = "all .3s ease-in-out"
    }

    setMaskTip() {
        this.maskTipNode.style.position = "absolute";
        this.maskTipNode.style.left = 10 + "px";
        this.maskTipNode.style.top = this.offsetHeight + 35 + "px";
    
        this.maskTipNode.style.width = "200px";
        this.maskTipNode.style.minHeight = "100px";
        this.maskTipNode.style.backgroundColor = "white"
        this.maskTipNode.style.borderRadius = "3px"
        this.maskTipNode.style.padding = "5px"
    }

    setMaskDesNode(des) {
        this.maskDesNode.innerHTML = des
    }

    maskStart(guide) {
        // setNode()
        let ele = document.querySelector(guide.element)
        this.setMask(ele)
        this.setMaskTip()
        this.setMaskDesNode(guide.description)
    }

    setMaskBtnNode() {
        this.maskBtnNode = document.querySelector('.mask-btn');
        this.maskBtnNode.innerHTML = 'Next'
        this.maskBtnNode.onclick = (e) => {
            console.log(this.count)
            this.count++
            if (this.guides[this.count]) {
                this.maskStart(this.guides[this.count])
            }
            else {
                this.maskNode.style.display = "none";
            }
        }
    }

    start(){
        if (this.guides) {
            this.maskStart(this.guides[this.count])
        }
    }

}

export default MaskGuide
