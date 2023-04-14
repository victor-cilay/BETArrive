<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_e40590f45afd08495c61185afcd24ab1($e,$m){

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
