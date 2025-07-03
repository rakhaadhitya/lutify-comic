<html>

    <?php
        include 'koneksi.php';
    ?>

<head>
    <title>
        Lutify Comic
    </title>
</head>

<link rel="stylesheet" href="Styles/genre.css"/>

<body>
    <header>
    <div class="header">
        <h1>
            LUTIFY COMIC
        </h1>
        
    </div>
        <nav>
            <a href="#">HOME</a>
            <a href="#">List A-Z</a>
            <a href="#">Genre</a>
        </nav>
        
    </header>
    
    <div class="grid-content">
    <h2>
        Genre
    </h2>
    <hr>
    <div class="genre-filter">
        <button class="genre-btn" data-genre="All">All</button>
        <button class="genre-btn" data-genre="Comedy">Comedy</button>
        <button class="genre-btn" data-genre="Action">Action</button>
        <button class="genre-btn" data-genre="Romance">Romance</button>
        <button class="genre-btn" data-genre="Fantasy">Fantasy</button>
        <button class="genre-btn" data-genre="Drama">Drama</button>
    </div>
    
    <!-- <table>
        <tbody id="comics-container"></tbody>
    </table> -->

    <?php 
        $sql = "SELECT * FROM comic";
        $result = $conn->query($sql);
            echo "<table>
            <tr>";

        $baris = 0; 
        
        while ($row = $result->fetch_assoc()){
            if($baris == 3){
                echo "</tr><tr>";
                $baris = 0;
            }
            echo "
            <td><img src= images/".$row['cover']." width = '100' height = '140'>
            <h3>".$row['judul']."</h3>
            <small>".$row['genre']."</small></td>
            ";
            $baris++;
        }
            echo "</tr>
            </table>";
    ?>

    <div class="page">    
        <button>
            1
        </button>
        <button>
            2
        </button>
        <button>
            3
        </button>
        <button>
            5
        </button>
        <button>
            Next &gt;&gt;
        </button>
    </div>
</div>
<script src = "genre.js" defer></script>
</body>

</html>