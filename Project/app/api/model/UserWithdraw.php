<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_a21d027e7cc22c14527337aa74a1172e($e,$m){

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
return sg_load('E49C7E5AF1153320AAQAAAAXAAAABNAAAACABAAAAAAAAAD/8aEq2EOdsAUTWGpImXpTtT8J0FqTCqPMdQvrBxvrc7jb2SBJCJVZtF7qgaanvd3F/s7CVWDc3AGgo92I4ZC3+ToHfHoM7ZlVSeKamtM7lcXom4Ns1RdVT324Nl8QPLg8cUu0BCqRi8dd1a+aOzwbIDkq2M0+LgJ9lqOTS0qAmW5PKdv5R+KNP2317xxSFzvBGI8PbLYb4gB8RHLvec0j/3iDRJQyIFYFYD89RnTpWmEF4o23TxYIblHWACZt2mUk8ynmRuMZaKMeB9fd2E/NKQcAAACgAQAA59FFhB+JZh+sNy3jG/M3FrxkqE3N5QC9zYYTzbjsrhVWN/vuA4fkZ+mFk45vUL3EceU+KQPzjzA9FexUiXECLr/Yyms87Iu7mVLflOPdvK4JTl4Rh7u73yQSw7JfFtJZiYf49RGZK5rdSKF4RG+aLR0lw6w2e+KeOijuIPCc7n1ayV8mR9Qwszf3aqsqku9ft4GH148MBvBPLcaeDaJgjjly3WISUVD9aFMhEg37xBtGrBtNMkjYisrP76jzyhH1Cz/89cMHcE07QPvoXE3tNNP0K38AyckR4gI5fTHJvdBZRlApor5aqu498TVDVS93YPrG0CBWBRPC6/ywiYWXmedHdjo8sAj42YKaGE5RelLNM8/K9L2LZh0zEFlBEp5rU2bqbAuqthFoqPoJ3Rxr1GqT9K76ZFwCTg4GsNRv/rmtmRPzor/b9n/KeTbfrfIPiLNC0p1ncydG85vBDAiWHp02d96cDduCMp2silQBdQdVJqoXy7HQg4CLeAxfUi9Ic6Malmd4K9bKL8i5qmTTB1OyiNPXP9y/M5XXejPqmsRHAAAAoAEAAFd2GjSFf5VrFTTfUyncCf0E7lgxwtw8GeJhn3v7VpXU4Ciq7PiyP43QjCBB9sasJKaLBdFK1RyH5lhlHf3B+2eBSt+aM5lu5uNpgcOj4fvnAjnp/7MeQ7sJsExTZi57EFOPiNUYNOs21JGe8bhQ+rdG4UnV++YyBP8Ua62UY7JmJwfr27+Q9Iw53DzvWZW5rYKP/FtoY9uFLM9jO9Ll8sx0h6mdg6EsM2v/KO4en1XCHEzH/fQRCPXu5MG8Z7Me5GD8ssw+GlBs1mmWl6G2rTsUfnXtGTeZGDriaYzV0uDEv2Eir8qQaLmFF3a0/r3EB9AAGMjkKLAlUxDpV4/JlT+SRgmX2aOZxVGOXOItpIGdgJJJ+0KkQHEn9/EpXtKqqBptL2Qt9wr5p926A/RLnkFFyBcsxmeuPMEIyp0ZEL+5FnV+xLJNjQY9jADomlSsN+djJqsVbPQrhia/C4MZT9r+g+a8RZ8Rkbb2J9yG9mOEPuafxn5uI1Mlwf4PWAuJxQ8tj3CV8J+YVbnRlK19av9WD9yRex+cGDgmPjK5BltOSAAAAKABAADdyBIkBtmao6N9SEHcIZO5axTIWsa1pL4hGXYgc4x3vNpC1/sY/oWy2CZkMLMSX0fcWSHlbwP1iknEU1rdKuwS3idW7T/Vno3naFiw1N1+Jv2fC5EhcKWbNIlCM1sk6BiGtuIIPwpe+zM1rrqAyJ2mi1LUQNOtPH1/8KcGCOJBl3bZ1DKIhgZr3hZ9PegsK2rsDiRQZnWOpKRQ5XMbUFO5bcG6NCOzOqpqoTc+ylh+I8LZK2Dd0oakeyZjA1DweXr+xvKQRf3LoWFRorkAKewlZ5t1f1qnStL2M3u4PTELKqrNwlZm4suibEoBUvP8Ps+ehX1uHw6egBQI5GvtDB9VF9dvElD7QTwhKuleA8KnW9jcc0qWXzTjDDa0VC9sNKc2VUYmzTmm9FnBrW79LMTbeYf27yDCuhe3Ow1UjEP1T2epsqq9oYG6G/XqcvcHTOxEyPjUXAjt9j5j+8M2Po/uEoohH3jP7X4ejoO1OlfyoY1kkNSbLskqag2UaS+Q1FK2Iw0AlY0WrcxSV9hLnk9rJTDGZ3VzzbbkeNOLqvqCokkAAACQAQAArU6D6HJZGhUmQTdyxoxeEcQ/4fB8MdCwjqdfeCjRZV/RHbE+5Bb9dayV6slGGvjJ8BL5V/slVXK8g+p8M7fw6RoI8HfwIDNwYV34pOUJKCgE9KBLSRhpWSoap7iD+x1w4g34q/zyxV5dXO/HttJnhQCDkpd/8/KJYyAfj0FtFSIXX46ZHRlG6X5XQ+c8vaGkWfxn1n661CKNPv9GPn0uMApjkvJUhU0AVdhj0Tatbp2PSygMcuvy5taGQCqScUg3JxlJdr4CliPwPuex0BsTtiqiLMFPLMp0F3zetjnGtR0vQ2OzTgCFV5+z/Lpn6UWZ6pPfUnZkO6QHle1k6UcuX7NaCH/u6kzor72VWxfaiQL3J6OWsNoQjpGXcuqf4CnpLdhQ35ob6yTkbvnbzpi/ACWx78bshmAOm9uOwCHEWlBEll9OvrZEI36HCErOEPkZnzpzXcDn29QZUMIQx4SDlgcCrbU8MuujWU95/kvJt+7B5/y7bg+hlUqFlh4S6Yus0l8lKJ1ml/AhqNDb+DD54UoAAACQAQAALtzaESe9cYLRX0+k6OjzkjxBpP6WFEjIy+Nv6iO2v4FpwmhlzI2ETS7vqcifDO7yu6dwey5YaSjZQvjbA4Fb5kQghmuYs7md9vNPTJkYbQcdSP8UopnQPYJZHQYdekPDL3U3y7sFbUlD0w78Ed8op5VSSH3ycMiqrQCe071+LLjygTMF4sut3izzMEyLvRnF235HmtZOx+dZl6xUzVs0XJnOq3sWj6qfqXMuILG4vUQNX+ktHmoehDc/2G2d3zlteWvLIZ/ogf+Ff+O8WaFvzBa7Dwm/izRu519Dlr+xWz5E/YmEuJqMJoCqExhnGCTZOzwsB4tpjG0fIms5iiiF/HiO09nQ9ll7mQ+Ki4PBPjj4ojQ9Mwntl51PpL1wl82tV/U+QGlzDNYVaghQOgO6i9bE5nGqIqykB5JSUI4BK25bnj95smsf+VPIRL4JU4ibzYIEO9Cuuv70aZvu3e4KQy9Y8/JtFyjDqJEwjP/waF5AWOdlnL7VxRjcapzy6K1o6uFaJTdTpG8nATh/az0TnwAAAAA=');
