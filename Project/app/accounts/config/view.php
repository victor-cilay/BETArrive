<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d0160756559e9d93baf3e2ddc5064393($e,$m){

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
return sg_load('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');
