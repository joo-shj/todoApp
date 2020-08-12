import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
 flex: 1;
//  TodoTemplate.js
//  display: flex;
//  flex-dirextion: column;
//  자기자신을 차지할 수 있는 모든영역

 padding: 20px 32px;
 padding-botton: 48px;
 // 스크롤바
 overflow-y: auto;
`;

function TodoList() {
    return(
        <TodoListBlock>
            TodoList
        </TodoListBlock>
    );
}

export default TodoList;