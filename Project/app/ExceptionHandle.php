<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d192a8974b3a707e84b0d22ab47f7d2b($e,$m){

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
return sg_load('E49C7E5A554989BDAAQAAAAXAAAABNAAAACABAAAAAAAAAD/VTAZCTUYpX2k/b8MoM0nXtzBzJBn9Y/TftmXBvdCnHubu9FI1DREJaHJWCbrH2JUwnFgSwWOwJ2P9J3UMO6QbvgQDH7ScuaHeR5Wfnr4EGTKeUjNdhEtTmXT/qqYk64CHnLOdl19OP2oJLXYxZivmYoh9HXDyCWjETBAoz4BngIWsjuliJd6A0GE1/gRl3xeTC+jtpQ+V96rlcLJshdyrd0X434d7buw0vPrY00Q25rN7R8T6tBPeaMUelrR+pSXsgnCWJA16EdgLQmMyR09uwcAAACAAwAAty0QgyaVZI/Jps3kXfn+BpnoQOTA+VTOLvdujIfxkhJtjDmHvZnEAxIfOJMcYVNZfIL7NAnGPev7rqQXF2X9K6j1q10ramzWMNosB5IuKj2bNaCq5D/gGXPFYCFjp9nVKhkbnXvW2deyoU3qB/pnzIUfvHQFdlrL86r9nmrXSLbmIiCCSxPURC4B+zivzjZR+uKJRTOAeJ3HLfoBiUZ18LxA8QJYaD4YHLvmPUGKlY6MjTSkGLtH4PG7jkv/Kq18dxe3P5ahkvTddUFJsxV7k9rTLJP1BV8EFOUkO9kudAbd4WYkPjZ1UxsnwEviDfL5RqNOvoIHqKCJQSQj9XfEUaJZjwcaSgpzT67EKRQc9JJZ64uchtH/iDEMiu/lQ7ttT8CrypH+3ZooSKxWrYok43yHXlTIqSHmn3aO+vLPKdDX/GPId8b9NT4xDXeI2M9pVtgTbnL1y8EWyKXLQVnXaL6wORMTVPY4CgDmrYO18YpCMnijJO+QRKrRhUQENjaPIYgUr7pbkG8kHyiNBIKDcwykHiWzsl/Hv1B5vOQhv2DgGrdggigmhCHAxgouyHjR9cov/Q12xNM05yhigiU85XCSBVLDdKmxE4gwp3JNv1Ev9+dNGXi8UpStbJ+QcPMY85W6Mc4/XovdVCd29fAe1nMZNOvb+miuVLnWKXpYHQmHdKAKh5X5E+E0tyIdWFARdFi3uGxXk1PHVOt822+LxeoOevBaXh4/nZd1T7LulvimQQgkHfz3y9giE5fuBkiX59wgv282MtXM7dbckOWmRHWMueQPDP3S8bt5qpkXtnr7k6llvWcvDKlWBXesGbRAflGmgwk0YbDQaBWWDQdnlv1A2Thfroabckor/0zTjvqDBIPNUY8kJywaPGEJFVKwZfP48DASsxe0vM9j4TmS//iD8EJB4/5laHoOKfUU40T2wTSYqDrhaNUYYYT0Fm5qgbPtuD+gA92UAkSo2bPPhnpn1JsI70v4G4OYtSLgOhGxsZC1/60SpUHHdVL6sBpy8oYCtXGkUwfFWHbgRD3Ib4UpHv/LSSeh6f0baGvbOw5RpmQ52ha0U/28ehwArGDelp6d7Uiidy6rUnEYHJMI4FaiuWh/jo87KgNFei3nAzFw1EcInHNmT1jItiNIR07F9r8zzzPRrh5OptRP+mjpBNdcZUQtJJV5gCHsxQPhyOVHAAAAkAMAAIBECBsycdgFP/Leay/3IkQqtX705gVT4cttyp9vgjFtIVwXd/YXdp+FUXq2pN3o0xU+NakB+ZEM9onjoqkyzpSlxTNQmtVx39TAUyxJXqnOtGicUolzvPdPr3Djnbe+xVxyAnrsOQG9e/lTIxAm7d2cdSkxw0patGksEp+ycPwTB1VBxEH1LwSrDaHi/hNhQBpTYI7TrydzTfvRUqmZfW5tys6XkPbquVQ6pM63IVF0rx7Sk9PPpZCz7IXLORdISQUEkvbpivkykihaq75X1dVgMHvL2BHPToFvpXCPkzK21iCbQlASQbzmJEcrWSYy9qqBDBbdmSUVsSYeV72czjLZHH0P5sFRQpQCOWNSB+pjdWZdm43+FHAcvgxxuCnrN8DgPym5i5EJlFUSNwKSd1faXjxEMKFuqEM0t1jsA/1tKovwiKAJJNmOHhNyiYlNPIamJxcYkjeinQgLYsyrRwjch2xZ2sQsibEtAwWuQtKpdJFQkp3Itp0FFYs8nZQpYB7iqCEFvMWV28pCAucL4JuF6sygGXWD0krC4Hxn4w9weMpfEvcXLY3ouVZlnikuCICuGjqtxsC0eDdpMApwV1ckuOp1BDk1hwGWju1GSp/7e5JHJ0fvuXvnvqm/OJ5WMJzf6h/7wEDi89Zvk8crw8ldZCsXHIPIE70DC9Rt5WAsN/p7GDiohlDyUZyruYZhLMEXe1fE1hKj44N3OwGGiE5W+ggn9uw/CSD2UdbcRseyQ6nslxqo0YcnSO5uQHVf/vvdQtKRiwdIsQrHTbY/XME6NTfKJ/szFY4XbcQbYZ48dsiCItPCHXUvd6/dCy3Gf9uP2y5NigT5256E3DFfZugflUVxHEUV37B5TqxZXmgtGNET7icMxrOaRKmpy0CJpfztUguHs2zGH9o8WsTDLHgcvtdNyReJC3Iv9IzR0xc5zIh8XjLLifPHpcEkucUENmzNhHqJ/JMx0/12vHG2ZIXc/zLwUKcWAFLTEAQniuoNjp9CMBMyDsAiGCLGlMn8CZM9a/nC7MXsrnMyBNjo/ri6v1sjklKNDAZ2va6f/9JdSWrbxl645QTxYKEjVBN3+Sz2RC+Bjqo63qHaqibn4h79IrfmrAQJDQAAFSblhhLV89h5F5O4vrta50JuRQFkZSAw0ig/2/l613xPZJ8w72n0yfyL7F/rtoRek55AcgXEalptr/7gBho3mh53O/Fqv0gAAACYAwAAPTogMV1MRbN0Toc1fUWb/RfvZBH23HVrYR4JmH/5oADx+KUE4gvO//NwDTiBq8xzGPb2WtS+Yne0Poc3SBNnxr0s9PjXCyPNp2fsGCZaB27ie8yqXNc7FDhQn1EhPrbrTJs46ni1EWitA5rAw6cA6lVfOSgxIQm0BYWn6JejwvmsbFXFmjqIp3WnfgEuXS+Lm8nYCmdX2/84rgQrRS91h3HV/HCN81cgeKPff04VvJT3CVdxKlpxIGK7f41MFkQFUXMEFxa6wXFuvPonlWPrLuqy3uzyFdE79vip/NsLZNyn5NuefTvYpmtt/YbBz/w7+16kggqOM4DIpNjAwZh/X4jxb/FECM5Ek72S9IADU1Yrbybch5x5rZbIpEW9RkdmJ4t8kJUpSXVMb65rP81Zay21bo250JaV+sIl1ged40YHoVLxK1i7miR9vTX8H/KwbNQMmgBuWHAjEHH08JL3sWx/6gSUEbOiLOKMkAlShxjDUk6Ke0uviBTgBRkLhhexIXu1i1VCJkIeb4Cc1825TerolHhhshFd66OEDkXGwYEShfKA5DK/9fRhLqJOoyp/0iEKmFhs0bh1B5tuR6goDy/NxH7CW9sQevJYhqRwCMLjWAchEn20QIfWX5WpLlG+aoteaJbAZ/zPn8MVRJrzjxSGbgRKRTzVEfguSXW1lLH/Qx9BYiTKwb8l7E+SMOUk8FnDAyuvPr0Yg3DupLyFMX9Q6GpH76I56tJebNSROpdgJovpXGW1sggoYr34Dj+3Qb0aqv96A+p3dU6VYgkgEZrMAVI8YuBG9rb5yzefRjPvnUyTOg3SDRVYNVvpgKqHpyI9EfkaDVYCEBQL+Pa8CPm3TMTRpEmwpzQR7OyKC+WWn08ZsatfqpRcxO2LKpIRfpCp1Vy4JHMnw2SWXVBnTTx0GeNzZeYJLGNx1SGxuRW5L+k4ANqXhDWvLJB7oH61L7axe8a6yCx+k0lsPjQoHk+cJgYSaQvLUHUzgCZPsd1YmK64pUKs6vIh5fu+bMGjNcPdjKUBIkgqL786NwWgLCllB/UbStVWPJrBECZmZOYORg7ksRZ0XAX9zcD3DugoRhx/3O0FvNFsZE4kIDQMampqUEfDaR2esC0hudjGec12qh1XJCFrn77JQOK+D7RKKI6MQNwhgEBgkLUQqRb32Yrk8S0fPVIE/xShsgcQ0XEYvCUrM85HUWTzDIUa1+BsADyNeYfl9mZJAAAAcAMAAHuatVLeM+i8rCjFKLnmt232cKTmAzvGxAKuMlZgG/fCPnNWUaOZ1hGv1CZYcLANLuYXtwBNFmiIIAAjwM1COT89EvXVCZ7+MUwebAhL1VvfzKHjS0bk8TkpMfprbzERYk/r2k4ckhW6i3JcpPk8Ty0PpIIRSD7yOflKXVHF6PdRrXtuqryRnNuyZs709aHi9oQAKuaTGyaBfwyr7NlX9lyd65FDbiatfXTekn9ciD8Nr8fz+QkH23aO08g01v3BGDE8AksXcxp9XKnOJWtZJ6eBu6bCyey6euJBnQD/D3Ho0DRjVJslxB7FCAwjYDpEek4mh5Jx3VeOFfw/z20GYrnkYzoLgUL8DUdA1o2lDg20DizFTvVw4VDb0LAwy24W7AEbqoYL0DZZukuMSILFCZclYpg2wWLgFNvl93UNZUTU1ILuMg1Q3QHt5Cimg/rgn2c6syIzxAAU+udZSoMKwKC/tW1qhmNLHhP4oUqWuf6PfchRzg/v82+c5xJPcj5LBq5xWHCpxs3vD3CwzqSFcFBbbojmXCXv3StXxKtpxpqJxxpBPB0o0mag7ob/nbNTDf1+KX8nvAOXxO90BLaAw2Rmfu9TQlv5p1F7tSlCnO6tvSGUioGAWZTSHdl1XTItmkwDGor5xIXKws5hxqck7tViLZ+jSmsyum+NGVXKNwRaOs7xK7hkQCHr7F10TtBbfWZ7GGQQcWJLbkRVOVbCtBE2b1gTeTEPI+IYwucB+xjrCZ4SQeIEJJMULxa8X52tzJwYDpcz5N7XrLz/ZuztRt59s3sPCgf2Ec/HjZbyrzPRa9oLmg5Q9KFfgHwhsPqijl18D1A5nEOnUFMQbK9eAukj3pUxjRZFD1a3HcuzxIKMPoY6G7pIu3CxGuRsgYt3uXx2fmQYAk38Mt9bvXhRoIdY6eZRJiDMG14mjpvQ0zbHbeDaZ4uMKKkOLLpRiHVfDVYeKYRY3cSUaqnldLSHxQOpkb5UKkgc5zVqJ4Kb0g/TaV+lyp11SC14TbrO+ZXm3uZI0445SS31C9wEemBOfCOWM14D7OxI3ELsva4J3vSJFtyvPl0Pqvs08C3JXJWSuSURMf5B3ggIaUQSI7RJJbbSs6Gi6Wx8U2sCoHbb5MJ/k8AcXY0pE4yW7WsJGnyR3Rn7LwjdUZPqQIPd0cj95vdKAAAAcAMAAD+Mf9UIX21nGiTymdDwSaFzRclhC0F4Ju1q1QTPa3pRo9z2LFJerlFdHxT8TVsvoFiddFb+u5+uH4pshofeSYs9IHWQ/unkL5XvH7NlFTRD5PeHVOTGx2P4r/s/qidqipb26sHJ+FW4hw05ZgzxJhgq5jzno/ju65hXMNzTy4S+9KvoJ9vQAPQQt73SA/kIwfjG2iT1bT9DK2ac6jXGOuO9sp4Gjfb3soUtV5+w/BQoIb22YmJDFM/TGY4D96Em3BFFfdNEpGZbZHx6+wwzKmEqTzT5c2muI9n12FiGBYpKflDvU4YZ8WBbunBc/Avae9z7m1msriwonkKZsz97mFq0XWteM0c/N5ZYiFWk7oqjuBODVXimoiqKoTDcA08Gh8+w/HKDIQ14LWSEV7zzsXuYb3y2qYnlAxC0zpiXEYnzIpaEoOVO+55HgFOxr43wQ8OYsnMfJAqxdDmpdtg0affKnkYTcHgxFr5YXPOLppBdmRmFJ2NnH1pfWGlLEkEkh4G3ESgXMKX7amJ8/lWYJ6eA/IeJhHS5Dl1Qs48DW/yBltont0p+j2kODBIOkK8/ygpIVJMjWE5C49QXHJf+/MVwTvvQRF7dFuT53SzRzB2HId6AWSq/0W7IPPffHEPfzGURbDRnV2HFiEPWyHAkxN3w/foIf0AM2uTtJV2PJkrSeAcmYDTWMyIJs/M5e2Yx2jcEeoJ/AxNs/7U+twwcCenXf1/iIxUbjsBP2msx25pot5N0PVjFcSvHG6496JdG4qDblOUCBzNMBGK+KQpnyM+/tWQYrTNgJCdqzY9XPJXi2LFUmh6hdSbH1pB4mKhickR92AttWoqf+YEdSuRmXyREMQ0pNd7N0MjyUF1DsPKw+1m5lr3fHVYottxmWiVx713wJdq85QcIV8YHO0anAFYvJ7H2UzQp4WK/ld782A0C6t94N5XvxkVwMSaRbV50qgdvlJ5YIhrE8nkPl0IgOQxhCLJ0KrI2DARL7Ouj5x73R+0mjfDv+1oeUY/iKLh0B/byoZSsLZjTbIBs+M+BXq7Lj+5jnA6+g4Q4XMZXWjDPWgwLytbCkFb4Ye6qNJRZ6bcDKt2I3MbwuClZLdws7WMTayzSqDtafVrJJvVoFUsNicGT1DnreKTAbRsgS7UVQCdbYzBxSVzzXzXr3/6wv/oAAAAA');
