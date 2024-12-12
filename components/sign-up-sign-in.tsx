"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SignUpSignIn() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle className="text-2xl text-center text-[#3C6CF8]">
                        Добро пожаловать
                    </CardTitle>
                    <CardDescription className="text-center">
                        Войдите в свою учетную запись или создайте новую
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="signin" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="signin">Войти</TabsTrigger>
                            <TabsTrigger value="signup">
                                Зарегистрироваться
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="signin">
                            <form onSubmit={onSubmit}>
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Почта</Label>
                                        <Input
                                            id="email"
                                            placeholder="gg@mail.ru"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="password">Пароль</Label>
                                        <Input
                                            id="password"
                                            placeholder="Введите свой пароль"
                                            type="password"
                                            autoCapitalize="none"
                                            autoComplete="current-password"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <Button
                                        className="bg-[#3C6CF8]"
                                        disabled={isLoading}
                                    >
                                        {isLoading && (
                                            <span className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Войти
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                        <TabsContent value="signup">
                            <form onSubmit={onSubmit}>
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <Label htmlFor="firstName">Имя</Label>
                                        <Input
                                            id="firstName"
                                            placeholder="Иван"
                                            type="text"
                                            autoCapitalize="none"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="lastName">
                                            Фамилия
                                        </Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Иванов"
                                            type="text"
                                            autoCapitalize="none"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Почта</Label>
                                        <Input
                                            id="email"
                                            placeholder="gg@mail.ru"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="password">Пароль</Label>
                                        <Input
                                            id="password"
                                            placeholder="Придумайте пароль"
                                            type="password"
                                            autoCapitalize="none"
                                            autoComplete="new-password"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <Button
                                        className="bg-[#3C6CF8]"
                                        disabled={isLoading}
                                    >
                                        {isLoading && (
                                            <span className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Зарегистрироваться
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>
                    </Tabs>
                </CardContent>
                <div className="px-6 py-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        Нажав продолжить, вы соглашаетесь с нашими{" "}
                        <a
                            href="/"
                            className="underline underline-offset-4 hover:text-[#3C6CF8]"
                        >
                            условиями предоставления услуг
                        </a>{" "}
                        и{" "}
                        <a
                            href="/"
                            className="underline underline-offset-4 hover:text-[#3C6CF8]"
                        >
                            политикой конфиденциальности
                        </a>
                        .
                    </p>
                </div>
            </Card>
        </div>
    );
}
