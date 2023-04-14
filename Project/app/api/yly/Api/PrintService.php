<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_620c63440b6ab2dc209c838e77ddb4ba($e,$m){

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
