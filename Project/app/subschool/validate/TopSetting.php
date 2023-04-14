<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_10648ade31a1b4368de038b0e7afc8a0($e,$m){

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
