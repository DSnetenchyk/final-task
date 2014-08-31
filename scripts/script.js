window.onload = function () {
    var tabs =  document.getElementsByClassName('tab'),
        navPanel = document.getElementsByClassName('navigation-panel')[0],
        ctrls = navPanel.getElementsByClassName('button'),
        setTabs,
        activeTabNum,
        activeTab = 0,
        i;

    setTabs = function(active){
        var ctrl, n;
        active = active - 1;
        if (activeTabNum === active) return;

        for (n = 0; n < ctrls.length; n++) {
            ctrl = ctrls[n];

            if (n === active) {
                ctrl.className = 'button active';
            } else {
                if (ctrl.className.indexOf('active') !== -1) {
                    ctrl.className = 'button prev';
                } else {
                    ctrl.className = 'button';
                }
            }
        }

        tabs[activeTab].className = 'tab';

        tabs[active].className = 'tab active';
        activeTab = active;
    };


    for (i = 0; i <  ctrls.length; i++) {
        ctrls[i].onclick = function () {
            setTabs(this.getAttribute('data-tab'));
            return false;
        }
    }
}