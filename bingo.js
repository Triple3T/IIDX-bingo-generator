javascript:const toolBg=$('<div>').addClass('toolBg').attr('style','position:fixed;top:0;z-index:9999;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.6);');const infoArea=$('<div>').addClass('infoArea').attr('style','position:relative;top:20%;width:70%;max-width:720px;height:60%;padding:15px;text-align:left;background-color:#6bcde6;color:#fcfcfc;display:inline-block;overflow:hidden;');const infoTitle=$('<h3>').text('무작위 빙고 생성기');const infoDiv=$('<div>');const bingoDiv=$('<div>');const chk1=$('<input>',{type:'checkbox',id:'chk1',value:'chk1'});const lbl1=$('<label>',{'for':'chk1',text:'-(미분류) 포함　'});const chk2=$('<input>',{type:'checkbox',id:'chk1',value:'chk1'});const lbl2=$('<label>',{'for':'chk1',text:'개인차 제외　'});const lv=$('<select>',{name:'lev'}).attr('style','color:black');tabledata.categories.map((e,i)=>{if(e.sortindex>0)lv.append(new Option(e.category,i))});const lb=$('<span>').text('　이하');const cl=$('<select>',{name:'clr'}).attr('style','color:black');["NO PLAY","FAILED","A-CLEAR","E-CLEAR","CLEAR","H-CLEAR","EXH-CLEAR","F-COMBO"].map((e,i)=>{cl.append(new Option(e,i+1))});fb=i=>{var s=[];for(n=0;n<tabledata.categories.length-(chk1[0].checked?0:1);n++){if(!chk2[0].checked||!tabledata.categories[n].category.includes('개인차'))tabledata.categories[n].items.map(e=>{if(e.clear<cl[0].value)s.push(e.data.title+' '+tabledata.tableinfo.type+e.data.diff)});}if(s.length<i*i)alert("대상 곡이 부족합니다.");else{bingoDiv.html('');btable=$('<table>');btbody=$('<tbody>');for(var k=0;k<i;k++){btr=$('<tr>');for(var c=0;c<i;c++){iidx=Math.floor(Math.random()*s.length);btr.append($('<td>').text(s[iidx]));s.splice(iidx,1);}btbody.append(btr);}btable.append(btbody);bingoDiv.append(btable);}}const bt3=$('<button>').addClass('inputButton').attr('style','color:black').text('3x3빙고').click(()=>{fb(3)});const bt4=$('<button>').addClass('inputButton').attr('style','color:black').text('4x4빙고').click(()=>{fb(4)});const bt5=$('<button>').addClass('inputButton').attr('style','color:black').text('5x5빙고').click(()=>{fb(5)});infoDiv.append(lv);infoDiv.append(cl);infoDiv.append(lb);infoDiv.append('<br>');infoDiv.append(chk1);infoDiv.append(lbl1);infoDiv.append(chk2);infoDiv.append(lbl2);infoDiv.append('<br>');infoDiv.append(bt3);infoDiv.append(bt4);infoDiv.append(bt5);infoArea.append(infoTitle);infoArea.append(infoDiv);infoArea.append(bingoDiv);toolBg.append(infoArea);$('body').append(toolBg);