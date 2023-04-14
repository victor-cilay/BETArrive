<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_8d007631fa41c7b74c93d8d2df8ade44($e,$m){

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
