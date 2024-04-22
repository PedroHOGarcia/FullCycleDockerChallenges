const express = require('express');
const mysql = require('mysql');
const { type } = require('os');

const app = express();

const connection = mysql.createConnection(
    {
        host: 'mysqldatabase',
        user: 'root',
        password: 'testemysql',
        database: 'NodeDatabase'
    }
);

connection.connect(
    (err) => {
        if (err) throw err;
        console.log('Conectado ao banco de dados Mysql');
    }
);

const page_html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <center>
            <h1>Full Cycle Rocks!</h1>
            <br>
`;

function generate_string_table_head( data ){
    let return_text = '';
    let table_headers =  Object.getOwnPropertyNames( data[0] );

    table_headers.forEach( (elemnt) => return_text= return_text + '<th>' + elemnt + '</th>'  );

    return return_text;
}

function generate_string_table_body( data_list ){
    let return_text = '';

    data_list.forEach(
        (databaseitem) =>  {
            let intermediate_text = '';
            let database_values_array = Object.values(databaseitem);
            database_values_array.forEach( (elemnt) => intermediate_text= intermediate_text + '<td>' + elemnt + '</td>'  );

            return_text = return_text + '<tr>' + intermediate_text + '</tr>';
        }
    );

    return return_text;
}

function create_string_html_table( data_list ){
    let table_head_html = generate_string_table_head( data_list );
    let table_body_html = generate_string_table_body( data_list );

    return `
    <table>
        <thead>
            <tr>
                ${table_head_html}
            </tr>
        </thead>
        <tbody>
            ${table_body_html}
        </tbody>
    </table>`;
}

app.get(
    '/', (req, res) => {
        connection.query(
            'SELECT name FROM TbPersons', (err, results) => {
                if (err) throw err;                
                
                let html_table = create_string_html_table(results);
                let final_html = page_html.concat(html_table, '</center> </body> </html>')
                console.log(results);

                res.send(final_html);
            }
        );
    }
);

app.listen(
    3000, () => {
        console.log('Servidor rodando na porta 3000');
    }
);