import { redirect } from "next/navigation";
import {
    signUp,
    confirmSignUp,
    signIn,
    signOut,
    resendSignUpCode,
    autoSignIn,
    updateUserAttribute,
    type UpdateUserAttributeOutput,
    confirmUserAttribute,
    updatePassword,
} from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleSignUp(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username: String(formData.get("email")),
            password: String(formData.get("password")),
            options: {
                userAttributes: {
                    email: String(formData.get("email")),
                    name: String(formData.get("name")),
                    birthdate: String(formData.get("birthdate")),
                },
                // optional
                autoSignIn: true,
            },
        });
    } catch (error) {
        return getErrorMessage(error);
    }
    redirect("/api/auth/confirm-signup");
}

export async function handleSendEmailVerificationCode(
    prevState: { message: string; errorMessage: string },
    formData: FormData
) {
    let currentState;
    try {
        await resendSignUpCode({
            username: String(formData.get("email")),
        });
        currentState = {
            ...prevState,
            message: "Code sent successfully",
        };
    } catch (error) {
        currentState = {
            ...prevState,
            errorMessage: getErrorMessage(error),
        };
    }

    return currentState;
}

export async function handleConfirmSignUp(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
            username: String(formData.get("email")),
            confirmationCode: String(formData.get("code")),
        });
        await autoSignIn();
    } catch (error) {
        return getErrorMessage(error);
    }
    redirect("/api/auth/login");
}

export async function handleSignIn(
    prevState: string | undefined,
    formData: FormData
) {
    let redirectLink = "/";
    try {
        const { isSignedIn, nextStep } = await signIn({
            username: String(formData.get("email")),
            password: String(formData.get("password")),
        });
        if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
            await resendSignUpCode({
                username: String(formData.get("email")),
            });
            redirectLink = "/api/auth/confirm-signup";
        }
    } catch (error) {
        return getErrorMessage(error);
    }

    redirect(redirectLink);
}

export async function handleSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log(getErrorMessage(error));
    }
    redirect("/");
}

export async function handleUpdateUserAttribute(
    prevState: string,
    formData: FormData
) {
    let attributeKey = "name";
    let attributeValue;
    let currentAttributeValue;

    if (formData.get("email")) {
        attributeKey = "email";
        attributeValue = formData.get("email");
        currentAttributeValue = formData.get("current_email");
    } else if (formData.get("birthdate")) {
        attributeKey = "birthdate";
        attributeValue = formData.get("birthdate");
        currentAttributeValue = formData.get("current_birthdate");
    } else {
        attributeValue = formData.get("name");
        currentAttributeValue = formData.get("current_name");
    }

    if (attributeValue === currentAttributeValue) {
        return "same";
    }

    try {
        const output = await updateUserAttribute({
            userAttribute: {
                attributeKey: String(attributeKey),
                value: String(attributeValue),
            },
        });
        return handleUpdateUserAttributeNextSteps(output);
    } catch (error) {
        console.log(error);
        return "error";
    }
}

function handleUpdateUserAttributeNextSteps(output: UpdateUserAttributeOutput) {
    const { nextStep } = output;

    switch (nextStep.updateAttributeStep) {
        case "CONFIRM_ATTRIBUTE_WITH_CODE":
            const codeDeliveryDetails = nextStep.codeDeliveryDetails;
            return `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`;
        case "DONE":
            return "success";
    }
}

export async function handleUpdatePassword(
    prevState: "success" | "error" | undefined,
    formData: FormData
) {
    const currentPassword = formData.get("current_password");
    const newPassword = formData.get("new_password");

    if (currentPassword === newPassword) {
        return;
    }

    try {
        await updatePassword({
            oldPassword: String(currentPassword),
            newPassword: String(newPassword),
        });
    } catch (error) {
        console.log(error);
        return "error";
    }

    return "success";
}

export async function handleConfirmUserAttribute(
    prevState: "success" | "error" | undefined,
    formData: FormData
) {
    const code = formData.get("code");

    if (!code) {
        return;
    }

    try {
        await confirmUserAttribute({
            userAttributeKey: "email",
            confirmationCode: String(code),
        });
    } catch (error) {
        console.log(error);
        return "error";
    }

    return "success";
}
