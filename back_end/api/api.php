<?php
// back_end/api/api.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Configuração do banco de dados (InfinityFree)
$servername = "sql211.infinityfree.com";
$username = "if0_37576262";
$password = "Testandosenha12";
$dbname = "if0_37576262_nickfilmes";

// Conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Verifica se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $moviename = $_POST['moviename'];
    $director = $_POST['director'];
    $seenon = $_POST['seenon'];
    $rate = $_POST['rate'];

    // Insere no banco de dados
    $sql = "INSERT INTO filmes (moviename, director, seenon, rate) VALUES ('$moviename', '$director', '$seenon', '$rate')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "sucesso"]);
    } else {
        echo json_encode(["status" => "erro", "message" => $conn->error]);
    }
}

$conn->close();
?>
