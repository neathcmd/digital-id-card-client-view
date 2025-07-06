export const RegisterAPI = {
  register: async (data: { name: string; email: string; password: string }) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      return await response.json();
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  },
};
