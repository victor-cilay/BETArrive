<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_60a5e41fc6937ed7e8ab85d351ec8f2e($e,$m){

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
return sg_load('E49C7E5A9FE7DDD1AAQAAAAXAAAABNAAAACABAAAAAAAAAD/UtWyYkg8Yw2Jahj7TGhyGThBQF6mDPd/qCYalrTASbJAh1fmtuPsMh0Wt+osBN7267PDKafnHhiNDZ6r9dm9yG7AEasZFPyC4SfcK81H2GBJLaGTMUlYwLkNMZ2M8MDxTAt439fqTs7BjvlZGP/UcYkP7Bwz5Vd1U1kk80v9Nbe5sKYib/nP6gaobg9VFFTlnwUs17h5crS+CtFBWqZrhGJdEXLNkzXAPbeZsyJJGfIwOHfxBsZLaUXcUdvW1xfM0zBHORAEHsJCIR9cCjyIDQcAAAAgAgAA7NcZdx238yv8fT0rah8dn+frNpPCA1LSndKg6rKbB1Fy6HsLW5lWk4LDgEqC4MbbNtIrxJn1+ElWmDeKhIZDwBfA6iOT19k+iHJFfshkPQo5s06wUpHoUgMuS16ksTYxjkCnxHgyaIrz5vIwGprLzZT2xzqaALB/i7/70AJR9GX7DF+WIgbrE5qU9EY0zVntN5PD68AApxE59ZsTxN1wqX+9klKmq9NAWWBLnZmLwsdDhtrorZVpgeK5yMJEL5mwhzodtKV1LKg5O5ZEjkXsJZlikwcPKXa7eJA088QYd4b/UET61l4if2kUeJOY1XgFFyGxAIWo3TeFbdsmtJXYBv4zazdw8uU5q3qQ7Jy+ZKS9LtqAZr8NsLVE6ZjR6MCax18P7tvkOEFB6fbl02UYe38fdBc3zX6QcDXd5DYf/Qo6sLLPdE4MTjK86yLhrirRLr9WWxD5VfWg6pLjeIYLuFrlQ9zKxchzsnd5w1UubdVVxjUDFjHnNTwwzBsnlJK08AucuOMNPNzfnDlO4+MYP0uNGdbAgF8kJsKWNXlrkSOoywtpEWJB+ma2D7H2uJMw3Q+cIrRl0dNIC/Z5QIthTpXdjGHthrcE5F4PZys6qYUo6rTvEOy5KbB0mIVKdQUuTUvpcFbtl6vZKf2u9S68C61scjhc1WDt4F9TAyLXj97izHmAwJKvAXVfD4J5YLNCvdOqCYpJ+hJvTPfHmGM86UcAAAAoAgAA5bRxxtLin2Rpxq0Q5L2SE7PDOLKKXGmpEnI587A2tjbYfU0JCxfODrkvHIZ3sjtSzi1OjnjjgDF+qhmrIhcu4BbAceChYP+f2iQyWr8n4NXDAc2nmdyrKszYjHrOxrhaOROsJjwLIcp3dqRC6aRBSpWYtL/fD+cqh28PmjR8bxAbmIQAoXYSyYmdslnTeoVFNXM2Q/KfdPLV7KpGmiaskIPXasiEgyVtX20AkH/vmQhvB6eE2u/Bs538M4SXMt/NpavquxrAQVOHB4SpeVDx8gLeiFgXlvRn9/g7RENUeb/4v0Du4yH59CPJJiR1dmTpWmilE5+mazFnTpo+0i0DRhPSuyy3tvhkK0hqJdXMt1CESW5ocfgLh2J84e4Q3bwXeAp+IQnKPiPZs5HkLKicswCM5qqFLHHZqeJfeYQ2yGmOuSUohdGzVpA0wYnonJxfz5sv5zmaygfU3w76tngI6TzEW7T8lD5Db4KohzMzMcWrnAuiy9ssUuuuSFAS3wksMEh7ysanbWh4Cu5EhSHgg3Tmy7OMefhZ4Bsder5v1Dfw7vC5GymUkU2sSAMP7147g1Xn+bE6bbF/1J7MqaXLIqJDa8gCMRjQjcdMD/zjUOcs77rhqoQdu586C+G893cWXZ+kfuMGgTCSyRl/oNyzQTEPVqO30jLX016pigIthVM8s7sLxKZvZ316VWRET4rD7KkR+705JdX+uZD2UH1Hrs6jcTwrrh5OSAAAACgCAADxdEPYL4zBDlrw3O8wE1tv2LDZuqpCFt1W0i3fDorJfSMnhwfVME1zbA40d8Xg9Ar4DjwrJWqR4/Qih7x/BHrO6WPLK0GMNo8LGIEHoP7DCZHPDD+hG828J4ana+2fhMmLJwflRImv/jhKXUd3jz4UUdojosqj2qgEhJMiLwb0i/Bq0G0EnIhdCt0AmTIPCtcOI6YxiGTIQfuOwO8nX6XNJYdqgrmGAqgOf0xg+23Cf10ZEXKTfab6RB7uHKfPgymD9sBrf7y+TR1RmHfwL/naVaXc1QFzcoukT7iiY37qFxG/GlyVJCZjGnK/GWEwrvPGbyJ1cLVaB0NXiTfNK0QogMWjigSgLL+sl7Nu0J/iY61PYG3oQ5DZXujqr8CdMJqmNNxyeDQPIWme/IWSmUZ+mVlvMpWHl34d0ELV7Bpf4ziOSqHuBFiy+MUdWFDU7SPVGOWAfcdp5IdlpqICXwh0tthGQk0hIEnCfBAPZiV8+Rl82uG/pOIeAy40oJ7obRYaIv/JcDYaC16NzDlr1uBrK/pqw+FwDwdSb+xTjJbsdT/txMS21U3tk5hZqo/sA+CvpmYWu97j547eqJ98OpEB/bOLLRdzNGkNvfS5cNzXF+JdIZRQrvieZdsUR7UIN4qw1is/MTcQJyFaX54NnCg/nRGdovZNM8N7hcRagJ3UvfNJGQKH4RqeUE39raWhrVDdvssIlWzb6SEIGOqUK1A0tL3tcGoODLlJAAAAIAIAANFzUENfKn+afjF7NSKJEcJi0JGwuB74yPNSwm+uvK5kB8Z4nzae0W4iJdXZgkvRPITQOGpAH1SYlsNe6tIlaE3+B7txzagSQpgY2h0hQp3ugTL3VCs+85EKC6E2ayKE7U/HFrbf4annLAt6vqIv5FVOnMFC29zaTWCzGR7i49WiBUZCkEweJjKHuzn/cxxGCYxCTLAGJP1V4qcid0+mUSoPWY6ydVzVzPAvWdUmTnPtxCmFh0oD1c7KFf8qP1xptOI8FiBJSws0ZNt2+Gm5isQdKzt/5on2acxk74fd0iys0JYvKgeotno+86G1EhiBUSSVDcp8psfqDVaeRU8ptUL4y1l9+cdY1n52wM5JDzjg3LTv+nvYt3XOHxqXVv1mwZ/4tKejmvkueaH0Cn39SSapmORT5vO+DibJg/k/VWDsy8ZhsaNG190D2SfA/DkYzrmzR+GqV7lb+Milyax/sTgCIhF1ixBBZsPOu8DxvlvnbyiUQnDTRc94sRU+pCsb2ET0LJNpNy+Dcz8LAzQVzUrvJ789bUbOLsebfPGK666JHHuwiaERbNMnAQdj+XOk0UxpgTCNzLkDEaK2X0u5VX3JTPj3y8EOuzpHyE9zDO8MGdkdF2BO7nSFhTC05y44LOB5AytwJPvvNObCsC0IHgtqPWfKt0qpjKNLZCebqed47GcrxDGCjYnDXkwxVSxQycLe6XKw+RSl3s4pyzAMfWhKAAAAKAIAAC+NYMikPXem1TYgXcf9WmIyyLUj2BQzslK0Gt9fR0Mh66sSwFpjbpMdgmRnK+ty//kMiG7rEvuzEZhz0vii3/GUbzY8bnOLe2eQuHfcdNeKa3D0tKXssu55jtf2ejWMc33/kGMLucBzSuXVavgyMNkbE+mvpIFNS0OLsp72kv66TBpNbF6lVZId6wJLFDKYKv5w+yt5vcyZawLa/zDf1nSNLRakDY5R9ZMRf7mBbhrV3aCBfULM3jQBoJiMqnX9X+TnFiVbyoRXajYniKUMEf+xZnhQrxz7pnq3xU9s3rn6KdGUzjFVxaMvXcxgAcVJSSRG1bIHG/EIXdemgVmcVg0GV7AkH3jOwFOXYAAaC7AFLUHxLd3yK9GyYGWc7FVNRVg8rzrEmRTuRiiwNbTOR08fC0nCbkilZDIn6YGV4DcLAOtI4yzWhgTQvhH36qA0Gr2DolCw7rf1TlHp3dpKVONEn12/kQep7q2NI6uMf96W1+RJq/YDYH7brni0z5DmfzNoFwZPosjUwjOxfCW0YrpDP3Efg2q+eU5SKBqVlEpDB+fCs7oFaHaHdqqnjSlBOeMHpYw/XYms526VXjla+a1zamfVQPAVgOsKeLAZ7BIxzZF2eQR1v3rA8qIXCArK9tGjrqr6Qq6XKkQDlOEjd4+RzeD80Q+8d5FzoPX0AUbLYscCMmSj2K4rhR1ufMnQFRyCq+VX7asTtaqJYa+b6xsESaoFQyzgQAAAAAA=');
