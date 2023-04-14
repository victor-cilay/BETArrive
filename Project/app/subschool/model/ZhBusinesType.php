<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_35b66bc7f1c21ba1a2102e4164900527($e,$m){

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
