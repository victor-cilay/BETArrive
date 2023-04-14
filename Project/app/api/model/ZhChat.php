<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_57a908be624ae63c4bf86e3519d49882($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('E49C7E5AECF370D7AAQAAAAXAAAABNAAAACABAAAAAAAAAD/o+RLP1R5BKroGBDYTIGBxT99shVneGc8B2fL7TJnBWnbkrXS2JPJn6eGVRuAXc0ADUBdQgGxAGqr9sOqSkQkQN+KFBj+KEJ+cx7siyHlsYu+sy7TxUn7GkdRDGHot/pFiYOfm+u7lZqMLIMPGCVnITHJkkhr5wAtDlfw/mZnU2B7+q4ywNLvy5djSKmHLbo7Ee9Nd+1JzCf6JDldDlmulqPARN8Jo55MxVXCaR19jBm0pdacab2FdBlEEbJyKhFw8PgCeu4X92COHuJ27arrvQcAAACYAQAAASsaQ5ArcjYA+fioaLb3HRjfmMkrUqh4CUCsOcxI8GG7/1Vm27mbJG2U7OxLgnm98ghYnwAoldoY5A/KQNk/SDvHzczqBMs9Sp23iKccnuaDkSYMiNcR+V37rnIGfOAaEV6JfXD0wJ1LGoBgew/Gl7xmqYnM2wIsutJfy+G/6jGxSJG2W4aKtjxEGFKyPvr1vkCwOWvM55cso2oEwRVaZsmHj4hBpPTilpJLAIq6XBqMCbS+DzfuZYSdpGhvWooZY42KZ1qf/eVbUYbyCTPNBFv4T7kIwPs05dquUAgaRQSa5vNh6HMhYMHIgtOrzh+KhXbHBLJocT9DYoGe8hBqGO/1GGEF0ouXWcN9/KMKO95BPiAIxVbpR0d1WJs8vy5fW/kyPJm6gDhDVH1ItIB8E0eW9wxTBozK0uKOdlPd39OQYCfz1gAyTduscPwcyjz1vvwatKXFxrLXCFl+srV2rSpEIJyHuxdtOXG5wSR4v9ElPal1eBhHQx5GfkW/Nu0w+0ErO2/P5T1f+PdBb8ApXocqLmEqw1SbRwAAAJgBAADRkMUfd5xdPk3jV0x2cGAy1OfV2/Uy+u4m6b0RIYBd0BvsWjHYYL7GpNkNv+vTStX+2OycAzjhT7zk//FqX93XVDytdQv2Z1zuFUh/7PZdrRFjxy23GBBI056kuwXAH0KhcWVr4KnPpyS+wGv2vfH+fi2b/GXGDfMj/e5qk4fsVTa1eBJk95Zu72k3wL1lOo9NHJo3i9V1oWXVOBr7+14PeKs1YD1iF/+qVJQAvqiPw+bv1exyvZYRh0apRDtoX6GxamMsuAF/70t+LgFPnxOZhrwJiIbI+N77HT9T9qkZdkBWJDfk0V7+d0rdU2tsF4miQNhbCNNgR+l2rEXfXq2w9ZWKfu5k5DYecPW+rxa3RxGo6zv8nINSBI4lFYzWNsvHDAZiT+ckRoMvNvMhHM+AkAN/fkkW8lrzLLZxbaFk6BXn84OuaVyOtlA4r8u2M7ZBnAn+I55cDUt+XktjdiRASh+7U/zBy1w7/fiI4P2DrotuTAurjrVJTaxuaJiSve/Cd7vrO8AxKmDc4wjSF6kNq/8gDOtaOltIAAAAoAEAALUhA/F9L3F+acaoVqkpaRQmGNFGzKZyKqu/YDOoE1v7tx7emaWzPl7qDGYAvS2cxhC6kVVywHhZXvzPU7/lFG42i7UShU+CpA0t7wS4vF6/ih7+nbX4VVQtDEySSXsyCHbq9gjTRAj7eogtyfJrve/qs/e8BczTfGvQw+SLiutXnPNDtnMjB/JuzYI9I6olGcaNNrmj4U7tNR2LurV7I4T28qSa8t09S7H6h1DKTOSCkqSjeiSBpEufu3SlGSYtb2/n2macBVFTF+2WALp8NvuWRqj2+969TPWvXwHXUMC7wD2IQDGTvhlzDeJ2JBx8WyiqlqKoEiV64c1z9cMpEAjY2bYwXVCcd3zZvMScyQKXKt7NtwLjmtU2rkWTHBd5UAlGlgSwWIXj2al2B8DaeNY+xrmlARfsFCKUyUjIfsleEuVouarVO5lb3tleLKXikH1E1GkN4JKc+DnvrXIo8mKuRg0y3K24d3f5XYuNfPKC3lXJGHHpr6sdpDOfViR1C64kMi+bd3thKnAIJsZDEGaTkGt5HqUcER7bZXMsPXLSSQAAAIgBAABf0XTiF3vnXvXwCQiANrE/AVeIdEeppYkSd12XFfTPtCmn9kjSBEg7WS0JM5RRzj+1g7/zouN71QvXHJV/pNdyYMF8aQNtaSU38JuGOlB/dt7+GiTSgktAAvGkJBXwNuzN550Af13z5YvCD4fdhYcYjP91uYZJxf81tBusFFm88rLwBWDB+Hg0ZYfx97lqhuIQV/dbRSDCPBBiswDke8L3EGoEbgfGHgLJQOhR2x508L3iJBwTNK9BwGLcuXl83EmX0VL2DrzSFy12VROB7L1js+ngfKP77pSGwR+Myk8y6x6F26P3ore65YG2Wg55t0axFGab2bCzM6eEJhlj3GBYmJP9DnbflTi3R2gU6HORQCKhNMqRbkTpT6W93TOfYmwxAOPPFI6QD/xH70+FI5BN8/eR3WYcNfdre0ilim5D869MXTQgULk7SO2DIckPi2ImltDPUeQQhbAWMOYfzjwPggnHL+mr38HfuBASlI72cnEol69AQb74ibr86AcBb/PgZqPk6U0N90oAAACIAQAAHiHUoscER4quLB5UzkP2oG70xy1j2QiGQwHEmiFvGSbZBA2BO2SW0tgFnV1J069qaZk41ZcFehDWtn0DCDEzxzWlx3ixI26D/+MZxtx9Ktc2doFecqdlUdYoM+C4bGlYpiIquDZhA2Zm/7eT8zrzfr6OySt/cTUHDv4J3btLHluUdqlKWrz/E7rFgjHmLgnZBNJRyMaha4EV5aQz1d5ATm7R+czA9X+I02YH1c+NBqYf4zmAz00sMVAvHUDjZq6fgtGjZ7GlN7mosLt/II1jzMKSX/CKpxuLeCrARDPnwCkEfwLvUfYNBbMJOtdt7LyVmDBS2cugALkAvY0uFaR5lFlIpKA38qpNpepxp6TKo8vzw0/Y4IoDWbG07fc/ASBHfurBMI4ygCV0eQye20gxCQavQCzGW+EtsoJKrsTqrU0JJFpEXgou9sI3RRZu5C4bQAoHqm+fi9LQ3zezkyaL4ZLQUZcV+Fd4i/PzZulo0tJMObrVtsFghSHjGOp8SR1uZsNfQJg+NpcAAAAA');
