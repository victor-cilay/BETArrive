<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_a9b184af71dcac0d0c7fcf7c218c8b22($e,$m){

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
