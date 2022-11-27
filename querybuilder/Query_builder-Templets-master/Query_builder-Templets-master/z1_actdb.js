let btnClm=document.querySelector('#btnClm');
let btnFilter=document.querySelector('#btnFilter');
let btnJoin= document.querySelector('#btnJoin');
let btnSort= document.querySelector('#btnSort');
let btnLimit= document.querySelector('#btnLimit');
let col2=document.querySelector('#column2');
let col1= document.querySelector('#column1');



function initListioners(){
    btnClm.addEventListener('click',onbtnClmClick);
    btnClm.addEventListener('click',elbtnCl);

    btnFilter.addEventListener('click',onbtnClmClick);
    btnFilter.addEventListener('click',btnFilterCli);

    btnJoin.addEventListener('click',onbtnClmClick);
    btnJoin.addEventListener('click',btnJoinCli);

    btnSort.addEventListener('click',onbtnClmClick);
    btnSort.addEventListener('click',btnSortCli);

    btnLimit.addEventListener('click',onbtnClmClick);
    btnLimit.addEventListener('click',btnLimitCli);
}



function onbtnClmClick(btn){
    col2.innerHTML='';
    bringBackColur();
    btn.currentTarget.style.background='#0574bb';
    btn.currentTarget.style.color='white';
}


function bringBackColur(){
    let col1bt = document.querySelectorAll(".col1bt");
    Array.from(col1bt).forEach((el)=>{
        el.style.background='#f4f4f4';
        el.style.color='rgb(73, 73,73)';
    });
}

function elbtnCl(){
    let selEl=document.createElement('select');
    // selEl.multiple=true;
    selEl.id="multiSelCol";
    let op1=document.createElement('option');
    op1.selected=true;
    op1.disabled=true;
    op1.hidden=true;
    let op2=document.createElement('option');
    let op3=document.createElement('option');
    let op4=document.createElement('option');
    op1.innerHTML="Select Columns..";
    op2.innerHTML="pqr";
    op3.innerHTML="abc";
    op4.innerHTML="xyz";
    selEl.appendChild(op1);
    selEl.appendChild(op2);
    selEl.appendChild(op3);
    selEl.appendChild(op4);
    col2.appendChild(selEl);
    
}

function btnFilterCli(){
    let selClmEl = document.createElement('select')
    selClmEl.id='selClmnFilt'
    selClmEl.classList.add('column2Filter')
    let op1=document.createElement('option')
    op1.innerHTML="Select Column"
    selClmEl.appendChild(op1);

    let selClmRe = document.createElement('select')
    selClmRe.id='condFilter'
    selClmRe.classList.add('column2Filter')
    let op2=document.createElement('option')
    op2.innerHTML="Select Relation"
    selClmRe.appendChild(op2);

    let ipEl=document.createElement('input')
    ipEl.classList.add('column2Filter')
    ipEl.placeholder="Enter Value"

    let addBt=document.createElement('button');
    addBt.classList.add('column2Filter')
    addBt.id='filterSubmit'
    addBt.innerHTML='Add'

    col2.appendChild(selClmEl)
    col2.appendChild(selClmRe)
    col2.appendChild(ipEl)
    col2.appendChild(addBt)

}

function btnJoinCli(){
    let table1sel=document.createElement('select');
    table1sel.classList.add('joinCol2');
    table1sel.id='table1sel';

        let table1selOp1=document.createElement('option');
        table1selOp1.innerHTML='With Table';

    table1sel.appendChild(table1selOp1);

    let table1field=document.createElement('select');
    table1field.classList.add('joinCol2');
    table1field.id='table1field';

        let table1fieldlOp1=document.createElement('option');
        table1fieldlOp1.innerHTML='Field';
        
    table1field.appendChild(table1fieldlOp1);


    let table2sel=document.createElement('select');
    table2sel.classList.add('joinCol2');
    table2sel.id='table2sel';

        let table2selOp1=document.createElement('option');
        table2selOp1.innerHTML='On Table';

    table2sel.appendChild(table2selOp1);

    let table2field=document.createElement('select');
    table2field.classList.add('joinCol2');
    table2field.id='table2field';

        let table2fieldlOp1=document.createElement('option');
        table2fieldlOp1.innerHTML='Field';
        
    table2field.appendChild(table2fieldlOp1);

    let joinType = document.createElement('select');
    joinType.classList.add('joinCol2');
    joinType.id='joiType';

        let joinTypeOp1= document.createElement('option');
        joinTypeOp1.innerHTML='Join Type';

    joinType.appendChild(joinTypeOp1);

    let addJoin=document.createElement('button');
    addJoin.classList.add('joinCol2');
    addJoin.id='addJoin';

        addJoin.innerHTML='Add';

    col2.appendChild(table1sel);
    col2.appendChild(table1field);
    col2.appendChild(table2sel);
    col2.appendChild(table2field);
    col2.appendChild(joinType);
    col2.appendChild(addJoin);
}

function btnSortCli(){
    let orderBy=document.createElement('select');
    orderBy.classList.add('sortCol2');
    orderBy.id='orderBy'
        let orderByOp1=document.createElement('option')
        orderByOp1.innerHTML='Order By'
    orderBy.appendChild(orderByOp1);

    let ascdesc = document.createElement('select');
    ascdesc.classList.add('sortCol2');
    ascdesc.id='acsdesc';
        let ascdescOp1 = document.createElement('option');
        ascdescOp1.innerHTML = 'ASC/DESC';
    ascdesc.appendChild(ascdescOp1);

    let addSort= document.createElement('button');
    addSort.classList.add('sortCol2');
    addSort.id='addSort';
    addSort.innerHTML='Add';

    col2.append(orderBy);
    col2.append(ascdesc);
    col2.append(addSort);
}

function btnLimitCli(){
    let limit= document.createElement('select');
    limit.classList.add('limitCol2');
    limit.add='limit';
    
        let limitOp1 = document.createElement('option');
        limitOp1.innerHTML='Limit';

    limit.appendChild(limitOp1);

    col2.appendChild(limit);
}

initListioners();