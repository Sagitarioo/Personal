var urlPre = "http://cors.itxti.net/?"; //跨域中转
var url1 = "www.webxml.com.cn/WebServices/WeatherWebService.asmx/getWeatherbyCityName?=";
var isbind = 0;

    //获取城市信息
    var getCityInfo =function(){
    	//数据校验
    	if ($("#search-city").val()){
    		var searchButton =$(this);
    		searchButton.button("option","disabled",true);
    		$.mobile.loading("show");
    		var _data={};
    		var _url=url1;

    		_data.theCityName = $("#search-city").val();

    		$.get(urlPre + _url, _data,
    			function(data){
    				$("#list").html("");
    				var list =$("#list");
    				var Arrays=$(data).find("string");
                    var _arr = [];
                    Arrays.each(function(index,obj){
    				var i=index;
					var that=$(this);
        				switch(i){
        					case 8:
        					case 9:
        					case 15:
        					case 16:
        					case 20:
        					case 21:
        						_arr.push('<img src="weather/'+that.text()+'">');
        					break;
        					case 2:
        					case 3:
        						_arr.push(" ");
        					break;	
        					default:
        						_arr.push('<p>'+that.text()+'</p>');	
        				}
                    });

                    if (_arr.length > 0) {
                            list.html(_arr.join(""));
                            list.listview("refresh");
                        }

                        $.mobile.loading("hide");
                        searchButton.button("option", "disabled", false);
                    });
    	}
    	else{
    		alert("请输入要查询的城市！");
    	}
    };
    var isAjax=false

    var bindEvent =function(){
    	$("#search-submit").on("click",getCityInfo);

    }; 
    $(document).on("pageshow","#index1",function(){
    	if(isbind) return isbind = 1;
    	bindEvent(); 
    });