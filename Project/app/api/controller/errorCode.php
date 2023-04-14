<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_c07b55aa1af7e2dbc7f083ed88c9bee8($e,$m){

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
