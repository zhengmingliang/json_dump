var autoSaveAndLoad = function(){};

if(typeof $ != 'function'){
    console.debug("[autoSave Error] Not Installed jQuery");
} else {
    autoSaveAndLoad = function(elem_id){
    	// urlの後に?をつけて文字列を渡すことで別個の値を保存できる
    	var prefix = '';
    	if(location.search.length > 1) {
    		 prefix = location.search.replace('?','');
    	}
    	
    	var elem   = $('#' + elem_id);
    	var ename  = prefix + '_ID_ ' + elem_id;
    	//起動時load
    	if (localStorage.getItem(ename)){
    		elem.val(localStorage.getItem(ename));
    	}
    	//keyupでsave
    	elem.bind('keyup', function() {
    		localStorage.setItem(ename, elem.val());
        });
    };
}