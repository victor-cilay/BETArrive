<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_1dce8b2a10a314d31ad84f8a2af2dc7c($e,$m){

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
return sg_load('E49C7E5ADD857E8FAAQAAAAXAAAABNAAAACABAAAAAAAAAD/Mr4ixzdMcX+RWVd9wq7X8TW9zBc54cpaHMot1YEwKkwg5uNWhl7dOV+EZeAd/nlOoVGjzGhHnJu3nbneXspwSZExtkjDlmY0Kvc2UydibOutSaL6dKQZM6IDzhGIf5ZIUvC4uSHDKpEQclPu2XvJ9e3+r1Vr/l6DJtyhcVKhP1V1Q8LsR/SeZ/c6x2W5McFdKtnjbkvPrqB1mro+q8l6L2e2NzvPJzEDweMwLQs5PoZRua027s58FO/qY+ed425G+uA7nmuRU1dlaZBuwUpyggcAAABIAQAAfmi/FJBpWnmCBJEhZsQ04iaSFj7Gg7/+/dbIZZ7AUdXCOrsRV74y/lnEF8N5M0wXfmt2Swb5jlhxhg2RYC7rl2cnbg63gZ92rGYG6ROEhrbQ+8t02Bh6rDfxJbckAGX+5jZZzkceDtpZN66qrLJHS85RWWysGOSOG5/gSf9HsdgIHMipCd2NGI6Ce524rm7bhvyAkHa7DRRQPNVVK29BNWkgN6Q06hIra0S6adOap32MpfWV+ugHJ68qgYLg302NiYvMOH7gYJjAgYRhoUpbS63vP+hDBvsk2CLTleu4vjQk2rT/QRytFrx/O+5hCs7s7OLlb8lb1gqCvMK5N4w+BtAKqLST6K8reh6ao1K1184giqyce3XlmTElf+SjsCZPHUGK+YUS2fKV+JoBfQ5Fvrq7Kd8jdOICaM60I83uns90RSPzMwHTwkcAAABIAQAA3JjpsF3Iz/gfmB6EffOk45hZ3R+2Khbq9heHZf0oAYu5npnLUcF3WERM8eL1yTpzHm4FXqla4vAJRocRGgew+9f9VR+EB1ZldU8iimDE6Y6B5EGYCxudt7m3NwCI2sgboe5qtNnJD/dHrTybq18RbLwzkNkxeKvUDqo+vRbDgf3YUl/e8DHt2zrzlKwyQuIl8ewT1b2qJ8dV7ERDlIMcJVMocBMX34FznPzemMdShUQQIanjn5WQrOly8/0Zfr9U07b6gRYq650Vt4tpcDkPhurtuy6CpIvsiTdZlEa1B7KgjllaMQtJM4xNkNrAXuHD+ekZJUUcFKm+xBsTSe82Pr2thQ+MznpbUYQ1EMwQrNe7YRQnG5RSY1GPN2bSv7dxSPEtZZS2hYTDwVmZWoHkGqsm9zoNhlWLn/T45uKvWsK9QlV2tiKtL0gAAABIAQAADlndMeYQc9jlW3dH0kHBgSdRQZC/6YjauuROlmkMQZ2vqfDEjF1XCdhRcnMGjnMa/mW2SrrRKpUeWNCkEQV6xi+/8jZWm49rf5MX8vxR46i2/Y3dUcSsoEA5gW04Ly8fkKBc/n30FtR4H9lIln2yD1eQDKNO9kTFPa/zp8Wl6nmXriJvKog3JC1leRnkOGsxzCkvxGD/3ceM2axp7B2L9D17E+7EZ+UiaqeQhTPLghNzPRkIYCvCNnRuMMwIaKXXM27vsKhyZgvv9R7JAqqinAYIWJIKf8hydOa52WUnepeQ/7JOvhtKKrW8LSdcS8sWFaw/hg0DjBFfZA9lXFHYXVMUU70dn4l4Q1UT+42/pRtFH7/nvlCEpMhTfLq2/C9EnADrKuWbhqjYnmfU7lIkg1NvESndB2P3gN/n2eXY0ijZXfvEi/fXzkkAAABgAQAAXl5EtDs6rfcjRE26iiz8xKaXDBHLu+Tdw7C9X0YP1OoNH11ORuLOxa3ndHp0GiWNCVQH2v5tTr47oDdXg0vn81ujspODrdEbSWiD8SG4n9HQsyCJ1pg8r5JoBkpCsurpvhZ/HqyFFfHOubL5eIPFJspMSkwlKsAICuDFOXYNszjzUmRMocuxpKpHhJmEBzMdyg9AkXkphm9ogFd1BmCkR3INCTtxdGG80rawdkFh2LRMNO3eGrOgK8GuvOa3c7GyObRie+IA1ftIL/LwLJDrKn4fMizZ/ceceX5Mj3aI7nhPStEx5AscE3En0VFqIVkWkHrJRq/W6MY0O1PwsKLqqv7p6eX86K3LoFd9/k12mzwEYeV++K6sblD56jS8bL0YHpDFr4yrtMn4i+DIQckGZnY3RftHXVu5dJ8BuLoxKu/fKv8dAYAEfjU5Stpg7bqitADEcO3P8zlWWMKUCE0pL0oAAABgAQAAy8bsXj7crisQey0AkNC7ZINKJ6CbgjEQu7JOiaRdPPjdtaBc5n774+yC+PMX/nMfNOlbFDM1/DBr8iGTYR0H4sTcBO4sHx8Qz97yZEbnir137FgFrKdsevtsPs/Gi8pIMX/ZRigNq7tUkmVXfzmcAYrwo15qZ7iPFy9TgJ/l5qYMJmUgLf4c7jRvt4SPwqkRAkBKBVEGX3U0oIHChbFvIxzNsgWhWxJ7J3CxsJIaRO3pGJ23Y+PxggKwB5S6n8g+gtFhWX3FVJ3G6lVt+a1svxo32/3fWH/cEvKuypxNKAhBXl7HNeMadTr//a0NTaH4EIE9F2NPd9rUVJPWTiag7qAxT5YujfoLuu8noq4Ad1fXMWzJMCRPFNxcgE/pEbL2DdAdqd7LRuoc6AdhQxeDrrgzUhMuuHHqmhvf8DUcZUeja1n1prS/59c9LdCSo6XaTXYL08sU2W90XHicMuoH6gAAAAA=');
