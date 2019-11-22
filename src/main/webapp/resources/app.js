"use strict"
var app = app || {}
app = (()=>{
	const WHEN_ERR = '호출하는 js를 찾을수 없습니다.'
	let context, js;
	let run =x=>{
		alert('run안'+x)
//		$.getScript(x+'/resources/router.js',()=>{
//			$.extend(new Session(x))
//			init()
//			onCreate()
//		})
			$.when(
				$.getScript(x+'/resources/router.js',()=>{
					$.extend(new Session(x))
				}),
				$.getScript(x+'/resources/pop.js')	
		)
		.done(()=>{
			init()
			onCreate()
		})
		.fail(()=>{
			alert('fail')
		})
			}
	let init=()=>{
		context = $.ctx()
		js = $.js()
		alert('init안')
	}
	let onCreate=()=>{
		alert('onCreate안')
		$(pop.view()).appendTo('#divid')
		pop.open()
		setContentView()
	}
	let setContentView=()=>{
		$('body').css({
			'background-image':'url("resources/img/sea.jpg")'
				,'background-repeat':'no-repeat' //반복없앰 , 이미지 사이즈 작을때 바둑판으로 안되게
				,'background-position':'center' // 이미지 중간
				,'background-size':'cover' // 이미지 전체크기로 
		})
		$('<table><tr></tr></table>')
		.css({
			width:'80%',
			height:'900px',
			border :'3px solid white',
			margin :'0 auto'
//			'background-color':'#bbdefb'
		})
		.appendTo('#divid')
		$('<td/>',{id:'left'})
		.css({
			width :'20%',
			height :'100%',
			border : '3px solid white',
			'vertical-align': 'top'
		})
		.appendTo('tr')
		$('<td/>',{id:'right'})
		.css({
			width :'80%',
			height :'100%',
			border : '3px solid white',
		})
		.appendTo('tr')
		$.each(['naver','cgv','bugs'],(i,j)=>{
			$('<div/>')
			.text(j)
			.css({
				width : '100%',
				height : '33.5%',
				border : '3px solid white',
				'text-align':'center'
			})
			.appendTo('#left')
			.click(function(){
				$(this).css({'background-color':'#53CBE6'})
				$(this).siblings().css({'background-color': 'unset'})
//				$(this).siblings().css({'background-color': '#FFFFFF', opacity: '0.1'})
//				$(this).siblings().css({'background-color': '#FFFFFF', opacity: '0.5'})
/*background-color: #FFFFFF;
        opacity: 0.5*/
			/*	$(this).siblings().css({'background-color': '#bbdefb'})*/
				switch($(this).text()){
				case 'naver':
					alert('naver')
					$.getJSON(context+'/craw/naver',d=>{
						$('#right').empty()
						$.each(d,(i,j)=>{
							
							$('<div/>')
							.html('<h1>'+j.origin+'</h1><h3>'+j.trans+'</h3>')
							.css({
								width:'40%',
								height:'40%',
								border:'3px solid white',
								float : 'left',
								'text-align':'center'
							})
							.appendTo('#right')
						})
						
					})
					break
				case 'cgv':
					alert('cgv')
					$.getJSON(context+'/craw/cgv',d=>{
						$('#right').empty()
						$.each(d,(i,j)=>{
							$('<div><img style="width=200px"src="'+j.photo+'"/><br/>'+j.title+'<br/>'+j.percent+'<br/>'+j.info+'</div>')
							.css({
								border :'3px solid white',
								float :'left',
								'text-align' : 'center'
							})
							.appendTo('#right')	
						})
				
					})
					break
				case 'bugs' :	
					alert('bugs')
					list(0)
					/*$.getJSON( context+ '/craw/bugs', d=>{
						$('#right').empty()
						let pager = d.pager
						let list = d.list
						// No, title, artist, thumbnail
						alert(pager.blockSize)
						
						
						$('<table id="content"><tr id="head"></tr></table>')
						.css({
							width : '90%',
							height : '80px',
							border : '3px solid white'
						})
						.appendTo('#right')
						
						$.each(['No','앨범','제목','가수'], (i, j)=>{
							$('<th/>')
							.html('<b>' + j + '</b>')
							.css({
								width : '25%',
								height : '100%',
								border : '3px solid white'
							})
							.appendTo('#head')
						})
						$.each(list,(i,j)=>{
								$('<tr><td>'+j.seq+'</td><td><img src="'+j.thumbnail+'"/></td><td>'+j.title+'</td><td>'+j.artist+'</td></tr>')
							.css({
								width : '25%',
								height : '100%',
								'text-align' : 'center',
								border : '3px solid white'
								})
								.appendTo('#content tbody')
							})
						$('#content tr td').css({border : '3px solid white'})
						$('<div/>',{id:'pagination'})
						.css({
							width :'50%',
                            height: '50px',
                            margin:'20px auto',
                            	'text-align' : 'center'
						})
						.appendTo('#right')
						// 자바스크립트는 int i = 0 ; 이 아니라  let i = 0 이렇게 줘야한다. 
						if(pager.existPrev){
							$('<span/>')
							
							.css({
								width :'30px',
	                            height: '30px',
	                            display: 'inline-block', // span width 값 먹히게 하는것 없으면 잘안먹힘
	                            border:'3px solid white'
	                            	
							})
							.text('Prev')
							.appendTo('#pagination')
							.click(()=>{
								
							})
						}
						for( let i = 1 ; i <= 5; i++){
							$('<span/>')
							.css({
								width :'30px',
	                            height: '30px',
	                            display: 'inline-block', // span width 값 먹히게 하는것 없으면 잘안먹힘
	                            border:'3px solid white'
	                            	
							})
							.text(i)
							.appendTo('#pagination')
							.click(()=>{
								
							})
						}
						if(pager.existNext){
							$('<span/>')
							.css({
								width :'30px',
	                            height: '30px',
	                            display: 'inline-block', // span width 값 먹히게 하는것 없으면 잘안먹힘
	                            border:'3px solid white'
	                            	
							})
							.text('Next')
							.appendTo('#pagination')
							.click(()=>{
								
							})
						}
						
						//그림 하나를 나오게 하고 몇바퀴 돌려야할지 보고 each 하기 힘들면 for를 돌려라 .
//						$('<span/>',{id:'pagenation'})
//                        .css({
//                                 width :'90%',
//                                 height: '40px',
//                                 border:'3px solid white '
//                        })
//                        .appendTo('#right')
//                        if(pager.existPrev){
//                                 $('<span/>')
//                                 .html('prve')
//                                 .css({
//                                           color: 'black',
//                                            float: 'left',
//                                            padding: '8px 16px',
//                                            'text-decoration': 'none'
//                                 })
//                                 .appendTo ('#pagenation ')
//                        }
//
//						$.each(pager,(i,j)=>{
//                                 $('<span/>',{id:'spanid'})
//                                 .text(i)
//                                 .css({
//                                           color: 'black',
//                                   float: 'left',
//                                   padding: '8px 16px',
//                                   'text-decoration': 'none'
//                                          })
//                                 .appendTo('#pagenation')
//                                 .click(function(){
//                                          
//                                 })
//                        })
//                        if(pager.existNext){
//                        	 $('<span/>')
//                             .html('next')
//                             .css({
//                             	 color: 'black',
//                                  float: 'left',
//                                  padding: '8px 16px',
//                                  'text-decoration': 'none'
//                             })
//                             .appendTo('#pagenation')
//                        }
//                       
						$.each(pager,(i,j)=>{
							$('<span/>')
							.text(j)
							.css({
								width : '20%',
								height : '25px',
								border : '3px solid white'
							})
							.appendTo('#right')
						})
						
						$.each([],(i,j)=>{
							$('<div/>')
							.css({
								widht : '80px',
								height : '80px'
							})
							.appendTo('#right')
						})
					
					})*/
					break
				}
			})
		})
		
	}
	let list=x=>{ //bugs에서 호출할때 x 값을 넣어준다. 
		$.getJSON( context+ '/craw/bugs/page/'+x, d=>{
			$('#right').empty()
			let pager = d.pager
			let list = d.list
			// No, title, artist, thumbnail
		   $('<table id="content"><tr id="head"></tr></table>')
			.css({
				width : '90%',
				height : '80px',
				border : '3px solid white'
			})
			.appendTo('#right')
			
			$.each(['No','앨범','제목','가수'], (i, j)=>{
				$('<th/>')
				.html('<b>' + j + '</b>')
				.css({
					width : '25%',
					height : '100%',
					border : '3px solid white'
				})
				.appendTo('#head')
			})
			$.each(list,(i,j)=>{
					$('<tr><td>'+j.seq+'</td><td><img src="'+j.thumbnail+'"/></td><td>'+j.title+'</td><td>'+j.artist+'</td></tr>')
				.css({
					width : '25%',
					height : '100%',
					'text-align' : 'center',
					border : '3px solid white'
					})
					.appendTo('#content tbody')
				})
			$('#content tr td').css({border : '3px solid white'})
			$('<div/>',{id:'pagination'})
			.css({
				width :'50%',
                height: '50px',
                margin:'20px auto',
                	'text-align' : 'center'
			})
			.appendTo('#right')
			// 자바스크립트는 int i = 0 ; 이 아니라  let i = 0 이렇게 줘야한다. 
			if(pager.existPrev){
				$('<span/>')
				
				.css({
					width :'30px',
                    height: '30px',
                    display: 'inline-block', // span width 값 먹히게 하는것 없으면 잘안먹힘
                    border:'3px solid white'
                    	
				})
				.text('Prev')
				.appendTo('#pagination')
				.click(()=>{
					app.list(pager.prevBlock)
				})
			}
			let i = pager.startPage
			for( ; i <=pager.endPage; i++){
				$('<span/>')
				.css({
					width :'30px',
                    height: '30px',
                    display: 'inline-block', // span width 값 먹히게 하는것 없으면 잘안먹힘
                    border:'3px solid white'
                    	
				})
				.text(i+1)
				.appendTo('#pagination')
				.click(function(){
					let page = parseInt($(this).text())
				    app.list(page-1)  //javaScript 에서 int형 변환은 앞에 parseInt을 붙여준다. 
					
				})
			}
			if(pager.existNext){
				$('<span/>')
				.css({
					width :'30px',
                    height: '30px',
                    display: 'inline-block', // span width 값 먹히게 하는것 없으면 잘안먹힘
                    border:'3px solid white'
                    	
				})
				.text('Next')
				.appendTo('#pagination')
				.click(()=>{
					app.list(pager.nextBlock)
				})
			}
		})
	}
	return{run,list}
})()