import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import java.sql.*;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class);

    private static final String sqlCreate = "CREATE TABLE funcionarios (id INT PRIMARY KEY, nome VARCHAR2 NOT NULL, sobrenome VARCHAR2 NOT NULL, cargo VARCHAR2 NOT NULL)";

    private static final String sqlInsert1 = "INSERT INTO funcionarios (id, nome, sobrenome, cargo) VALUES (0, 'Cleytin', ' da Silva', 'Dev junior')";
    private static final String sqlInsert2 = "INSERT INTO funcionarios (id, nome, sobrenome, cargo) VALUES (1, 'Abu', ' Dabu', 'Dev senior')";
    private static final String sqlInsert3 = "INSERT INTO funcionarios (id, nome, sobrenome, cargo) VALUES (2, 'Maca', ' Rena', 'PO')";

    private static final String sqlSelect = "SELECT * FROM funcionarios";

    private static final String sqlUpdate = "UPDATE funcionarios SET cargo='CEO' Where id=0";
    private static final String sqlDelete = "DELETE FROM funcionarios WHERE id= 1";
    private static final String sqlDrop = "DROP TABLE IF EXISTS funcionarios";
    public static void main(String[] args) {
        PropertyConfigurator.configure("log4j.properties");
        Connection connection;
        try{
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute(sqlDrop);
            statement.execute(sqlCreate);
            try {
                statement.execute(sqlInsert1);
                statement.execute(sqlInsert2);
                statement.execute(sqlInsert3);
            }catch (SQLException e){
                logger.error(e.getMessage());
            }
            mostrarFuncionario(connection);
            statement.execute(sqlUpdate);
            ResultSet resultado = statement.executeQuery("SELECT * FROM funcionario WHERE nome='Cleytin'");
            while(resultado.next()){
                logger.info("O funcionário: " + resultado.getString(2) + " foi atualizado!");
            }
            statement.execute(sqlDelete);
            logger.info("O funcionário Abu foi deletado");
            mostrarFuncionario(connection);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
    public static void mostrarFuncionario(Connection connection) throws Exception{
        Statement statement = connection.createStatement();
        ResultSet result = statement.executeQuery(sqlSelect);
        while(result.next()){
            logger.info("ID: "+ result.getString(1) +" Funcionário: " + result.getString(2) + result.getString(3) + " Cargo: " +result.getString(4));
        }
    }
    public static Connection getConnection() throws Exception{
        Class.forName("org.h2.Driver");
        return DriverManager.getConnection("jdbc:h2:tcp://localhost/~/test", "sa","");
    }
}